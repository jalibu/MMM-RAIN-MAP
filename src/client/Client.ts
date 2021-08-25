import * as L from "leaflet";
import Utils from "./Utils";

Module.register("MMM-RAIN-MAP", {
	defaults: {
		animationSpeedMs: 400,
		colorizeTime: true,
		defaultZoomLevel: 8,
		displayClockSymbol: true,
		displayTime: true,
		displayTimeline: true,
		displayOnlyOnRain: false,
		substitudeModules: [],
		extraDelayLastFrameMs: 2000,
		extraDelayCurrentFrameMs: 2000,
		markers: [
			{ lat: 49.41, lng: 8.717, color: "red" },
			{ lat: 48.856, lng: 2.35, color: "green" },
		],
		mapPositions: [
			{ lat: 49.41, lng: 8.717, zoom: 9, loops: 1 },
			{ lat: 49.41, lng: 8.717, zoom: 6, loops: 2 },
			{ lat: 48.856, lng: 2.35, zoom: 6, loops: 1 },
			{ lat: 48.856, lng: 2.35, zoom: 9, loops: 2 },
			{ lat: 49.15, lng: 6.154, zoom: 5, loops: 2 },
		],
		mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		mapHeight: "420px",
		mapWidth: "420px",
		timeFormat: config.timeFormat || 24,
		updateIntervalInSeconds: 300,
	},

	runtimeData: {
		animationPosition: 0,
		animationTimer: null,
		map: null,
		mapPosition: 0,
		numHistoryFrames: 0,
		numForecastFrames: 0,
		loopNumber: 1,
		radarLayers: [],
		timeDiv: null,
		timeframes: [],
	},

	getStyles() {
		return ["font-awesome.css", "leaflet.css", "MMM-RAIN-MAP.css"];
	},

	getScripts() {
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
			timeWrapperDiv.innerHTML = `${this.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""}`;
			this.runtimeData.timeDiv = document.createElement("span");
			this.runtimeData.timeDiv.classList.add("rain-map-time");
			timeWrapperDiv.appendChild(this.runtimeData.timeDiv);

			if (this.config.displayTimeline) {
				const timelineWrapper = document.createElement("span");
				timelineWrapper.classList.add("rain-map-timeline-wrapper");

				this.runtimeData.sliderDiv = document.createElement("span");
				this.runtimeData.sliderDiv.classList.add("rain-map-timeslider");
				timelineWrapper.appendChild(this.runtimeData.sliderDiv);
				this.runtimeData.timelineDiv = document.createElement("span");
				this.runtimeData.timelineDiv.classList.add("rain-map-timeline");
				timelineWrapper.appendChild(this.runtimeData.timelineDiv);

				timeWrapperDiv.appendChild(timelineWrapper);
			}

			app.appendChild(timeWrapperDiv);
		}

		// Create map
		const mapDiv = document.createElement("div");
		mapDiv.style.height = this.config.mapHeight;
		mapDiv.style.width = this.config.mapWidth;
		app.appendChild(mapDiv);

		// Temporary add app-wrapper to body, otherwise leaflet won't initialize correctly
		document.body.appendChild(app);

		const firstPosition = this.config.mapPositions[0];

		this.runtimeData.map = L.map(mapDiv, {
			zoomControl: false,
			trackResize: false,
			attributionControl: false,
		}).setView([firstPosition.lat, firstPosition.lng], firstPosition.zoom);

		// Sanitize map URL
		L.tileLayer(this.config.mapUrl.split("$").join("")).addTo(this.runtimeData.map);

		for (const marker of this.config.markers) {
			L.marker([marker.lat, marker.lng], {
				icon: new L.Icon({
					iconUrl: this.file(`img/marker-icon-2x-${Utils.getIconColor(marker)}.png`),
					shadowUrl: this.file(`img/marker-shadow.png`),
					iconSize: [25, 41],
					shadowSize: [41, 41],
				}),
			}).addTo(this.runtimeData.map);
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
		let extraDelay = 0;
		if (self.runtimeData.animationPosition === self.runtimeData.timeframes.length - 1) {
			extraDelay = this.config.extraDelayLastFrameMs;
		} else if (self.runtimeData.animationPosition === this.runtimeData.numHistoryFrames - 1) {
			extraDelay = this.config.extraDelayCurrentFrameMs;
		}

		this.runtimeData.animationTimer = setTimeout(() => {
			self.tick();
			self.play();
		}, this.config.animationSpeedMs + extraDelay);
	},

	tick() {
		if (!this.runtimeData.map || this.runtimeData.timeframes.length === 0) {
			return;
		}

		const nextAnimationPosition =
			this.runtimeData.animationPosition < this.runtimeData.timeframes.length - 1
				? this.runtimeData.animationPosition + 1
				: 0;

		// Manage map positions
		if (nextAnimationPosition === 0 && this.config.mapPositions.length > 1) {
			const currentMapPosition = this.config.mapPositions[this.runtimeData.mapPosition];

			if (this.runtimeData.loopNumber === (currentMapPosition.loops || 1)) {
				this.runtimeData.loopNumber = 1;
				const nextMapPosition =
					this.runtimeData.mapPosition === this.config.mapPositions.length - 1 ? 0 : this.runtimeData.mapPosition + 1;
				this.runtimeData.mapPosition = nextMapPosition;
				const nextPosition = this.config.mapPositions[nextMapPosition];
				this.runtimeData.map.setView(
					new L.LatLng(nextPosition.lat, nextPosition.lng),
					nextPosition.zoom || this.config.defaultZoomLevel,
					{
						animation: false,
					}
				);
			} else {
				this.runtimeData.loopNumber++;
			}
		}

		// Manage radar layers
		const currentTimeframe = this.runtimeData.timeframes[this.runtimeData.animationPosition];
		const currentRadarLayer = this.runtimeData.radarLayers[currentTimeframe.time];

		const nextTimeframe = this.runtimeData.timeframes[nextAnimationPosition];
		const nextRadarLayer = this.runtimeData.radarLayers[nextTimeframe.time];

		if (nextRadarLayer) {
			nextRadarLayer.setOpacity(1);
		}
		if (currentRadarLayer) {
			currentRadarLayer.setOpacity(0.001);
		}

		// Manage time
		if (this.config.displayTime) {
			const time = moment(nextTimeframe.time * 1000);
			if (this.config.timezone) {
				time.tz(this.config.timezone);
			}
			const hourSymbol = this.config.timeFormat === 24 ? "HH" : "h";
			this.runtimeData.timeDiv.innerHTML = `${time.format(hourSymbol + ":mm")}`;

			if (this.config.colorizeTime) {
				if (nextAnimationPosition < this.runtimeData.numHistoryFrames - 1) {
					this.runtimeData.timeDiv.classList.remove("rain-map-forecast");
					this.runtimeData.timeDiv.classList.remove("rain-map-now");
					this.runtimeData.timeDiv.classList.add("rain-map-history");
				} else if (nextAnimationPosition === this.runtimeData.numHistoryFrames - 1) {
					this.runtimeData.timeDiv.classList.remove("rain-map-forecast");
					this.runtimeData.timeDiv.classList.add("rain-map-now");
					this.runtimeData.timeDiv.classList.remove("rain-map-history");
				} else {
					this.runtimeData.timeDiv.classList.add("rain-map-forecast");
					this.runtimeData.timeDiv.classList.remove("rain-map-now");
					this.runtimeData.timeDiv.classList.remove("rain-map-history");
				}
			}

			if (this.config.displayTimeline) {
				this.runtimeData.sliderDiv.style.left = `${this.runtimeData.percentPerFrame * nextAnimationPosition}%`;
			}
		}
		this.runtimeData.animationPosition = nextAnimationPosition;
	},

	loadData() {
		const self = this;
		fetch("https://api.rainviewer.com/public/weather-maps.json").then(async (response) => {
			if (response.ok) {
				const results = await response.json();
				self.runtimeData.numHistoryFrames = results.radar?.past?.length || 0;
				self.runtimeData.numForecastFrames = results.radar?.nowcast?.length || 0;
				self.runtimeData.timeframes = [...results.radar.past, ...results.radar.nowcast];

				// Clear old radar layers
				self.runtimeData.map.eachLayer((layer) => {
					if (layer instanceof L.TileLayer && layer._url.includes("rainviewer.com")) {
						self.runtimeData.map.removeLayer(layer);
					}
				});

				self.runtimeData.radarLayers = [];

				// Add new radar layers
				for (const timeframe of self.runtimeData.timeframes) {
					const radarLayer = new L.TileLayer(
						"https://tilecache.rainviewer.com" + timeframe.path + "/256/{z}/{x}/{y}/2/1_1.png",
						{
							tileSize: 256,
							opacity: 0.001,
							zIndex: timeframe,
						}
					);
					self.runtimeData.radarLayers[timeframe.time] = radarLayer;
					if (!self.runtimeData.map.hasLayer(radarLayer)) {
						self.runtimeData.map.addLayer(radarLayer);
					}
				}

				self.runtimeData.animationPosition = 0;

				// Prepare timeline
				if (this.config.displayTimeline) {
					try {
						this.runtimeData.percentPerFrame =
							100 / (self.runtimeData.numHistoryFrames + self.runtimeData.numForecastFrames);
						const historyPart = (self.runtimeData.numHistoryFrames - 1) * this.runtimeData.percentPerFrame;
						const forecastPart = self.runtimeData.numForecastFrames * this.runtimeData.percentPerFrame;
						this.runtimeData.timelineDiv.style.background = `linear-gradient(to right, var(--color-history) 0% ${historyPart}%, var(--color-now) ${historyPart}% ${
							historyPart + this.runtimeData.percentPerFrame
						}%, var(--color-forecast) ${forecastPart}%)`;
					} catch (err) {
						console.warn("Error rendering the map timeline");
					}
				}

				console.debug("Done processing latest RainViewer API request.");
			} else {
				console.error("Error fetching RainViewer timeframes", response.statusText);
			}
		});
	},

	notificationReceived(notificationIdentifier: string, payload: any) {
		if (this.config.displayOnlyOnRain) {
			if (notificationIdentifier === "OPENWEATHER_FORECAST_WEATHER_UPDATE") {
				const currentCondition = payload.current?.weather[0]?.icon;
				this.handleCurrentWeatherCondition(currentCondition);
			} else if (notificationIdentifier === "CURRENTWEATHER_TYPE") {
				const currentCondition = payload.type;
				this.handleCurrentWeatherCondition(currentCondition);
			} else if (notificationIdentifier === "DOM_OBJECTS_CREATED") {
				this.changeSubstitureModuleVisibility(false);
			}
		}
	},

	handleCurrentWeatherCondition(currentCondition: string) {
		const rainConditions = [
			"09d",
			"09n",
			"10d",
			"10n",
			"11d",
			"11n",
			"13d",
			"13n",
			"showers",
			"thunderstorm",
			"sleet",
			"rain",
			"snow",
		];
		if (currentCondition && rainConditions.findIndex((condition) => currentCondition.includes(condition)) >= 0) {
			if (!this.runtimeData.animationTimer) {
				this.changeSubstitureModuleVisibility(false);
				this.show(300, { lockString: this.identifier });
				this.play();
			}
		} else {
			if (this.runtimeData.animationTimer) {
				this.hide(300, { lockString: this.identifier });
				clearTimeout(this.runtimeData.animationTimer);
				this.runtimeData.animationTimer = null;
				this.changeSubstitureModuleVisibility(true);
			}
		}
	},

	changeSubstitureModuleVisibility(show: boolean) {
		if (this.config.substitudeModules) {
			try {
				for (const curr of this.config.substitudeModules) {
					const substituteModule = MM.getModules().find((module) => module.name === curr);
					if (show) {
						substituteModule.show(300);
					} else {
						substituteModule.hide(300);
					}
				}
			} catch (err) {
				console.error(err);
			}
		}
	},
});
