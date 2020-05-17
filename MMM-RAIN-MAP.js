/* Magic Mirror
 * Module: MMM-RAIN-MAP
 */

Module.register("MMM-RAIN-MAP", {
	defaults: {
		animationSpeed: 600,
		backgroundColor: "rgba(0, 0, 0, 0)",
		disableDefaultUI: true,
		displayClockSymbol: true,
		displayTime: false,
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
		let styles = ["MMM-RAIN-MAP.css"];
		//if (this.config.map === "OSM") {
		styles.push("https://unpkg.com/leaflet@1.6.0/dist/leaflet.css");
		//}
		return styles;
	},

	getScripts: () => {
		return ["moment.js", "moment-timezone.js"];
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
		const self = this;
		if (self.config.map === "OSM") {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
			script.setAttribute("defer", "");
			script.setAttribute("async", "");
			document.body.appendChild(script);
			script.onload = function () {
				self.map = L.map("rain-map-map").setView(
					[self.config.lat, self.config.lng],
					self.config.zoom
				);
				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
					self.map
				);

				self.config.markers.forEach((marker) => {
					L.marker([marker.lat, marker.lng]).addTo(self.map);
				});
				self.updateData();
			};
		} else {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://maps.googleapis.com/maps/api/js?key=${this.config.key}`;
			script.setAttribute("defer", "");
			script.setAttribute("async", "");
			document.body.appendChild(script);

			script.onload = function () {
				self.map = new google.maps.Map(
					document.getElementById("rain-map-map"),
					{
						zoom: self.config.zoom,
						mapTypeId: self.config.mapTypeId,
						center: {
							lat: self.config.lat,
							lng: self.config.lng,
						},
						disableDefaultUI: self.config.disableDefaultUI,
						backgroundColor: self.config.backgroundColor,
					}
				);

				self.config.markers.forEach((marker) => {
					new google.maps.Marker({
						position: {
							lat: marker.lat,
							lng: marker.lng,
						},
						map: self.map,
					});
				});

				self.updateData();
			};
		}

		const app = document.createElement("div");
		app.style.height = this.config.height;
		app.style.width = this.config.width;
		app.style.position = "relative";
		app.setAttribute("id", "rain-map-wrapper");

		let markup = `<div id="rain-map-map" style="height: ${this.config.height}; width: ${this.config.width}"></div>`;
		if (this.config.displayTime) {
			markup += `<div class="rain-map-time-wrapper">
						${this.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""}
						<span id="rain-map-time"></span>
					</div>`;
		}
		app.innerHTML = markup;

		return app;
	},

	updateData: function () {
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
					this.sendRequest();
					this.show();
				} else {
					this.hide();
					this.stop();
				}
			}
		} else {
			this.sendRequest();
		}
	},

	sendRequest: function () {
		const self = this;
		const apiRequest = new XMLHttpRequest();
		apiRequest.open("GET", "https://api.rainviewer.com/public/maps.json", true);
		apiRequest.onload = function (e) {
			// save available timestamps and show the latest frame: "-1" means "timestamp.lenght - 1"
			self.timestamps = JSON.parse(apiRequest.response);
			self.arrayData = [];
			self.showFrame(-1);
			self.stop();
			self.play(self);
		};
		apiRequest.send();
	},

	scheduleUpdate: function () {
		const self = this;
		setInterval(function () {
			self.updateData();
		}, this.config.updateIntervalInSeconds * 1000);
	},

	showFrame: function (nextPosition) {
		const preloadingDirection =
			nextPosition - this.animationPosition > 0 ? 1 : -1;

		this.changeRadarPosition(nextPosition);
		this.changeRadarPosition(nextPosition + preloadingDirection, true);
	},

	changeRadarPosition: function (position, preloadOnly) {
		while (position >= this.timestamps.length) {
			position -= this.timestamps.length;
		}
		while (position < 0) {
			position += this.timestamps.length;
		}

		const currentTimestamp = this.timestamps[this.animationPosition];
		const nextTimestamp = this.timestamps[position];

		this.addLayer(nextTimestamp);

		if (preloadOnly) {
			return;
		}

		this.animationPosition = position;

		if (this.radarLayers[currentTimestamp]) {
			this.radarLayers[currentTimestamp].setOpacity(0);
		}
		this.radarLayers[nextTimestamp].setOpacity(this.config.opacity);

		if (this.config.displayTime) {
			const time = moment(nextTimestamp * 1000);
			if (this.config.timezone) {
				time.tz(this.config.timezone);
			}
			let hourSymbol = "HH";
			if (this.config.timeFormat !== 24) {
				hourSymbol = "h";
			}

			document.getElementById("rain-map-time").innerHTML = `${time.format(
				hourSymbol + ":mm"
			)}`;
		}
	},

	addLayer: function (ts) {
		if (!this.radarLayers[ts]) {
			if (this.config.map === "OSM") {
				this.radarLayers[ts] = new L.TileLayer(
					"https://tilecache.rainviewer.com/v2/radar/" +
						ts +
						"/256/{z}/{x}/{y}/2/1_1.png",
					{
						tileSize: 256,
						opacity: 0.001,
						zIndex: ts,
					}
				);
			} else {
				this.radarLayers[ts] = new google.maps.ImageMapType({
					getTileUrl: function (coord, zoom) {
						return [
							"https://tilecache.rainviewer.com/v2/radar/" + ts + "/256/",
							zoom,
							"/",
							coord.x,
							"/",
							coord.y,
							"/2/1_1.png",
						].join("");
					},
					tileSize: new google.maps.Size(256, 256),
					opacity: 0.0001,
				});
				this.map.overlayMapTypes.push(this.radarLayers[ts]);
			}
		}
		if (this.config.map === "OSM" && !this.map.hasLayer(this.radarLayers[ts])) {
			this.map.addLayer(this.radarLayers[ts]);
		}
	},

	play: function (self) {
		self.showFrame(this.animationPosition + 1);
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
