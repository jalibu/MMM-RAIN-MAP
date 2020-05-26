/* Magic Mirror
 * Module: MMM-RAIN-MAP
 */

Module.register("MMM-RAIN-MAP", {
	defaults: {
		animationSpeed: 600,
		backgroundColor: "rgba(0, 0, 0, 0)",
		disableDefaultUI: true,
		displayClockSymbol: true,
		displayTime: true,
		extraDelayLastFrame: 2000,
		height: "420px",
		iconsToShow: ["09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n"],
		key: "",
		lat: 50,
		lng: 8.27,
		map: "OSM",
		mapTypeId: "terrain",
		markers: [],
		onlyOnRain: false,
		opacity: 0.65,
		timeFormat: config.timeFormat || 24,
		updateIntervalInSeconds: 300,
		width: "420px",
		zoom: 8,
		zoomOutEach: 0,
		zoomOutLevel: 2,
	},
	animationPosition: 0,
	animationTimer: false,
	loopNumber: 1,
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
		this.scheduleUpdate(this.updateInterval);
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
		if (this.config.onlyOnRain) {
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
				this.isCurrentlyRaining = this.config.iconsToShow.includes(
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
		}, self.config.updateIntervalInSeconds * 1000);
	},

	play: function () {
		Utils.showFrame(this, this.animationPosition + 1);
		let zoomAfterPlay = false;
		if (
			this.config.zoomOutEach > 0 &&
			this.animationPosition + 1 === this.timestamps.length
		) {
			if (this.config.zoomOutEach === this.loopNumber) {
				zoomAfterPlay = true;
				this.loopNumber = 1;
			} else {
				this.loopNumber++;
			}
		}
		const self = this;
		const timeOut =
			this.animationPosition + 1 === this.timestamps.length
				? this.config.animationSpeed + this.config.extraDelayLastFrame
				: this.config.animationSpeed;
		this.animationTimer = setTimeout(function () {
			if (zoomAfterPlay) {
				if (self.map.getZoom() === self.config.zoom) {
					self.map.setZoom(
						self.map.getZoom() === self.config.zoom
							? self.config.zoom - self.config.zoomOutLevel
							: self.config.zoom
					);
				} else {
					self.map.setZoom(self.config.zoom);
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
