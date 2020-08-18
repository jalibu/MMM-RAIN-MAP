/* Magic Mirror
 * Module: MMM-RAIN-MAP
 */

Module.register("MMM-RAIN-MAP", {
	defaults: {
		animationSpeedMs: 600,
		defaultZoomLevel: 5,
		displayClockSymbol: true,
		displayOnRainOnly: false,
		displayTime: true,
		extraDelayLastFrameMs: 2000,
		googleBackgroundColor: "rgba(0, 0, 0, 0)",
		googleDisableDefaultUI: true,
		googleKey: "",
		googleMapTypeId: "terrain",
		map: "OSM",
		mapHeight: "420px",
		mapWidth: "420px",
		markers: [{ lat: 50, lng: 9.27, zoom: 8, color: "red", hidden: false }],
		markerChangeInterval: 0,
		rainIcons: ["09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n"],
		overlayOpacity: 0.65,
		osmMapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		timeFormat: config.timeFormat || 24,
		updateIntervalMs: 300000,
	},
	animationPosition: 0,
	animationTimer: false,
	loopNumber: 1,
	markerPosition: 0,
	map: null,
	radarLayers: [],
	timestamps: [],
	isCurrentlyRaining: false,

	getStyles: () => {
		return [
			"MMM-RAIN-MAP.css",
			"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
		];
	},

	getScripts: function () {
		return [this.file("utils.js"), "moment.js", "moment-timezone.js"];
	},

	getTranslations: () => {
		return {
			en: "translations/en.json",
			de: "translations/de.json",
		};
	},

	start: function () {
		this.scheduleUpdate(this.updateIntervalMs);
	},

	getDom: function () {
		if (this.config.map.toUpperCase() === "GOOGLE") {
			Utils.initGoogleMap(this);
		} else {
			Utils.initOSMap(this);
		}

		return Utils.initMapWrapper(this);
	},

	updateData: function () {
		if (this.config.displayOnRainOnly) {
			if (this.isCurrentlyRaining) {
				this.getTimeStamps();
				this.show();
			} else {
				this.hide();
				this.stop();
			}
		} else {
			this.getTimeStamps();
		}
	},

	getTimeStamps: function () {
		const self = this;
		const apiRequest = new XMLHttpRequest();
		apiRequest.open("GET", "https://api.rainviewer.com/public/maps.json", true);
		apiRequest.onload = function (e) {
			// save available timestamps and show the latest frame: "-1" means "timestamp.lenght - 1"
			self.stop();
			Utils.clearLayers(self);
			self.timestamps = JSON.parse(apiRequest.response);
			Utils.showFrame(self, -1);
			self.play(self);
		};
		apiRequest.send();
	},

	notificationReceived: function (notification, payload, sender) {
		if (notification === "CURRENTWEATHER_DATA") {
			try {
				this.isCurrentlyRaining = this.config.rainIcons.includes(
					payload.data.weather[0].icon
				);
				this.updateData();
			} catch (err) {
				console.warn("Could not extract weather data");
			}
		}
	},

	scheduleUpdate: function () {
		const self = this;
		setInterval(function () {
			self.updateData();
		}, self.config.updateIntervalMs);
	},

	play: function () {
		Utils.showFrame(this, this.animationPosition + 1);
		let zoomAfterPlay = false;
		if (
			this.config.markerChangeInterval > 0 &&
			this.config.markers.length > 1 &&
			this.animationPosition + 1 === this.timestamps.length
		) {
			if (this.config.markerChangeInterval === this.loopNumber) {
				zoomAfterPlay = true;
				this.loopNumber = 1;
			} else {
				this.loopNumber++;
			}
		}
		const self = this;
		const timeOut =
			this.animationPosition + 1 === this.timestamps.length
				? this.config.animationSpeedMs + this.config.extraDelayLastFrameMs
				: this.config.animationSpeedMs;
		this.animationTimer = setTimeout(function () {
			if (zoomAfterPlay) {
				self.markerPosition =
					self.markerPosition < self.config.markers.length - 1
						? self.markerPosition + 1
						: 0;
				const marker = self.config.markers[self.markerPosition];
				console.log("Position:", self.markerPosition, "Marker", marker);
				if (self.config.map.toUpperCase() === "GOOGLE") {
					self.map.setCenter(marker.lat, marker.lng);
					self.map.setZoom(marker.zoom || self.config.defaultZoomLevel);
				} else {
					self.map.setView(
						new L.LatLng(marker.lat, marker.lng),
						marker.zoom || self.config.defaultZoomLevel,
						{
							animation: true,
						}
					);
				}
			}
			self.play();
		}, timeOut);
	},

	stop: function () {
		if (this.animationTimer) {
			clearTimeout(this.animationTimer);
			this.animationTimer = false;
			return true;
		}
		return false;
	},
});
