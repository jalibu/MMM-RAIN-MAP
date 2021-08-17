import * as L from "leaflet";
import Utils from "./Utils";

Module.register("MMM-RAIN-MAP", {
	defaults: {
		animationSpeedMs: 600,
		defaultZoomLevel: 8,
		displayTime: true,
		displayClockSymbol: true,
		extraDelayLastFrameMs: 2000,
		markers: [
			{ lat: 49.41, lng: 8.717, zoom: 9, color: "red", hidden: false },
			{ lat: 49.41, lng: 8.717, zoom: 5, hidden: true },
		],
		markerChangeInterval: 1,
		mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		mapHeight: "420px",
		mapWidth: "420px",
		timeFormat: config.timeFormat || 24,
		updateIntervalInSeconds: 300,
	},

	runtimeData: {
		map: null,
		timeframes: [],
		radarLayers: [],
		animationTimer: null,
		animationPosition: 0,
		markerPosition: 0,
		loopNumber: 1,
		timeDiv: null,
	},

	getStyles() {
		return [
			"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
			"MMM-RAIN-MAP.css",
		];
	},

	getScripts: function () {
		return ["moment.js", "moment-timezone.js"];
	},

	getTranslations() {
		return {
			en: "translations/en.json",
			de: "translations/de.json",
		};
	},

	getDom() {
		// Create app-wrapper
		const app = document.createElement("div");
		app.classList.add("rain-map-wrapper");

		// Create time-wrapper
		if (this.config.displayTime) {
			const timeWrapperDiv = document.createElement("div");
			timeWrapperDiv.classList.add("rain-map-time-wrapper");
			timeWrapperDiv.innerHTML = `${
				this.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""
			}`;
			this.runtimeData.timeDiv = document.createElement("span");
			this.runtimeData.timeDiv.classList.add("rain-map-time");
			timeWrapperDiv.appendChild(this.runtimeData.timeDiv);
			app.appendChild(timeWrapperDiv);
		}

		// Create map
		const mapDiv = document.createElement("div");
		mapDiv.style.height = this.config.mapHeight;
		mapDiv.style.width = this.config.mapWidth;
		app.appendChild(mapDiv);

		// Temporary add app-wrapper to body, otherwise leaflet won't initialize correctly
		document.body.appendChild(app);

		const firstMarker = this.config.markers[0];

		this.runtimeData.map = L.map(mapDiv, {
			zoomControl: false,
			trackResize: false,
			attributionControl: false,
		}).setView([firstMarker.lat, firstMarker.lng], firstMarker.zoom);

		// Sanitize map URL
		L.tileLayer(this.config.mapUrl.split("$").join("")).addTo(
			this.runtimeData.map
		);

		for (const marker of this.config.markers) {
			if (!marker.hidden) {
				L.marker([marker.lat, marker.lng], {
					icon: new L.Icon({
						iconUrl: this.file(
							`img/marker-icon-2x-${Utils.getIconColor(marker)}.png`
						),
						shadowUrl: this.file(`img/marker-shadow.png`),
						iconSize: [25, 41],
						shadowSize: [41, 41],
					}),
				}).addTo(this.runtimeData.map);
			}
		}

		// Once the map is initialized, we can remove the app-wrapper from the body and return it to the getDom() function
		document.body.removeChild(app);

		return app;
	},

	start() {
		this.scheduleUpdate();
		this.play();
	},

	scheduleUpdate() {
		const self = this;
		this.loadData();
		setInterval(() => {
			self.loadData();
		}, this.config.updateIntervalInSeconds * 1000);
	},

	play() {
		const self = this;
		const extraDelay =
			self.runtimeData.animationPosition ===
			self.runtimeData.timeframes.length - 1
				? this.config.extraDelayLastFrameMs
				: 0;

		this.runtimeData.animationTimer = setTimeout(() => {
			self.tick();
			self.play();
		}, this.config.animationSpeedMs + extraDelay);
	},

	tick() {
		if (!this.runtimeData.map) {
			return;
		}

		const nextAnimationPosition =
			this.runtimeData.animationPosition <
			this.runtimeData.timeframes.length - 1
				? this.runtimeData.animationPosition + 1
				: 0;

		// Manage map
		if (nextAnimationPosition === 0 && this.config.markerChangeInterval > 0) {
			if (this.runtimeData.loopNumber === this.config.markerChangeInterval) {
				this.runtimeData.loopNumber = 1;
				const nextMarkerPosition =
					this.runtimeData.markerPosition === this.config.markers.length - 1
						? 0
						: this.runtimeData.markerPosition + 1;
				this.runtimeData.markerPosition = nextMarkerPosition;
				const nextMarker = this.config.markers[nextMarkerPosition];
				this.runtimeData.map.setView(
					new L.LatLng(nextMarker.lat, nextMarker.lng),
					nextMarker.zoom || this.config.defaultZoomLevel,
					{
						animation: false,
					}
				);
			} else {
				this.runtimeData.loopNumber++;
			}
		}

		// Manage radar layers
		const currentTimeframe =
			this.runtimeData.timeframes[this.runtimeData.animationPosition];
		const currentRadarLayer = this.runtimeData.radarLayers[currentTimeframe];

		const nextTimeframe = this.runtimeData.timeframes[nextAnimationPosition];
		const nextRadarLayer = this.runtimeData.radarLayers[nextTimeframe];

		if (nextRadarLayer) {
			nextRadarLayer.setOpacity(1);
		}
		if (currentRadarLayer) {
			currentRadarLayer.setOpacity(0.001);
		}

		this.runtimeData.animationPosition = nextAnimationPosition;

		// Manage time
		if (this.config.displayTime) {
			const time = moment(nextTimeframe * 1000);
			if (this.config.timezone) {
				time.tz(this.config.timezone);
			}
			const hourSymbol = this.config.timeFormat === 24 ? "HH" : "h";
			this.runtimeData.timeDiv.innerHTML = `${time.format(hourSymbol + ":mm")}`;
		}
	},

	loadData() {
		console.log("Calling RainViewer API for updates");
		const self = this;
		fetch("https://api.rainviewer.com/public/maps.json").then(
			async (response) => {
				if (response.ok) {
					self.runtimeData.timeframes = await response.json();

					// Clear old radar layers
					self.runtimeData.map.eachLayer((layer) => {
						if (layer instanceof L.TileLayer && layer._url.includes('rainviewer.com')) {
							self.runtimeData.map.removeLayer(layer);
						}
					});

					self.runtimeData.radarLayers = [];

					// Add new radar layers
					for (const timeframe of self.runtimeData.timeframes) {
						const radarLayer = new L.TileLayer(
							"https://tilecache.rainviewer.com/v2/radar/" +
								timeframe +
								"/256/{z}/{x}/{y}/2/1_1.png",
							{
								tileSize: 256,
								opacity: 0.001,
								zIndex: timeframe,
							}
						);
						self.runtimeData.radarLayers[timeframe] = radarLayer;
						if (!self.runtimeData.map.hasLayer(radarLayer)) {
							self.runtimeData.map.addLayer(radarLayer);
						}
					}

					self.runtimeData.animationPosition = 0;

					/*
					console.log(
						"radar layers",
						Object.keys(self.runtimeData.radarLayers).length
					);
					console.log("timeframes", self.runtimeData.timeframes.length);
					var layers = [];
					self.runtimeData.map.eachLayer(function (layer) {
						if (layer instanceof L.TileLayer) {
							console.log(layer)
							layers.push(layer);
						}
					});
					console.log("map layers", layers.length);
					*/

					console.log("Done processing RainViewer response.");
				} else {
					console.error(
						"Error fetching RainViewer timeframes",
						response.statusText
					);
				}
			}
		);
	},

	notificationReceived(notificationIdentifier: string, payload: any) {},
});
