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
		height: "420px",
		iconsToShow: [
			"wi-rain",
			"wi-thunderstorm",
			"wi-snow",
			"wi-night-rain",
			"wi-night-thunderstorm",
			"wi-night-snow",
		],
		key: "",
		lat: 50,
		lng: 8.27,
		map: "OSM",
		mapTypeId: "terrain",
		markers: [],
		onlyOnRain: false,
		opacity: 0.65,
		timeFormat: config.timeFormat || "24",
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
		console.log("Update Data");
		if (this.config.onlyOnRain) {
			const weaterIcons = document.querySelectorAll(
				"div.currentweather span.wi.weathericon"
			);
			if (weaterIcons && weaterIcons.length === 1) {
				const icon = weaterIcons[0];
				let hasRainIcon = false;
				this.config.iconsToShow.forEach((iconName) => {
					hasRainIcon = hasRainIcon || icon.classList.contains(iconName);
				});
				if (hasRainIcon) {
					this.getTimeStamps();
					this.show();
				} else {
					this.hide();
					this.stop();
				}
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
			self.timestamps = JSON.parse(apiRequest.response);
			Utils.showFrame(self, -1);
			self.play(self);
		};
		apiRequest.send();
	},

	scheduleUpdate: function () {
		const self = this;
		setInterval(function () {
			self.updateData();
		}, self.config.updateIntervalInSeconds * 1000);
	},

	play: function (self) {
		Utils.showFrame(this, this.animationPosition + 1);
		if (self.config.zoomOutEach > 0) {
			if (self.config.zoomOutEach === self.loopNumber) {
				if (this.animationPosition + 1 === this.timestamps.length) {
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
				self.loopNumber = 1;
			} else {
				self.loopNumber++;
			}
		}

		this.animationTimer = setTimeout(function () {
			self.play(self);
		}, self.config.animationSpeed);
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
