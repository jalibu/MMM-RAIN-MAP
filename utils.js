class Utils {
	constructor(module) {
		this.module = module;
	}

	initOSMap() {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
		script.setAttribute("defer", "");
		script.setAttribute("async", "");
		document.body.appendChild(script);
		const module = this.module;
		script.onload = function () {
			module.map = L.map("rain-map-map").setView(
				[module.config.lat, module.config.lng],
				module.config.zoom
			);
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
				module.map
			);

			module.config.markers.forEach((marker) => {
				L.marker([marker.lat, marker.lng]).addTo(module.map);
			});

			module.updateData();
		};
	}

	initGoogleMap() {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = `https://maps.googleapis.com/maps/api/js?key=${this.module.config.key}`;
		script.setAttribute("defer", "");
		script.setAttribute("async", "");
		document.body.appendChild(script);
		const module = this.module;
		script.onload = function () {
			module.map = new google.maps.Map(
				document.getElementById("rain-map-map"),
				{
					zoom: module.config.zoom,
					mapTypeId: module.config.mapTypeId,
					center: {
						lat: module.config.lat,
						lng: module.config.lng,
					},
					disableDefaultUI: module.config.disableDefaultUI,
					backgroundColor: module.config.backgroundColor,
				}
			);

			module.config.markers.forEach((marker) => {
				new google.maps.Marker({
					position: {
						lat: marker.lat,
						lng: marker.lng,
					},
					map: module.map,
				});
			});

			module.updateData();
		};
	}

	initMapWrapper() {
		const app = document.createElement("div");
		app.style.height = this.module.config.height;
		app.style.width = this.module.config.width;
		app.style.position = "relative";
		app.setAttribute("id", "rain-map-wrapper");

		let markup = `<div id="rain-map-map" style="height: ${this.module.config.height}; width: ${this.module.config.width}"></div>`;
		if (this.module.config.displayTime) {
			markup += `<div class="rain-map-time-wrapper">
						${this.module.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""}
						<span id="rain-map-time"></span>
					</div>`;
		}
		app.innerHTML = markup;

		return app;
	}

	addLayer(ts) {
		if (!this.module.radarLayers[ts]) {
			if (this.module.config.map.toUpperCase() === "GOOGLE") {
				this.module.radarLayers[ts] = new google.maps.ImageMapType({
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
				this.module.map.overlayMapTypes.push(this.module.radarLayers[ts]);
			} else {
				this.module.radarLayers[ts] = new L.TileLayer(
					"https://tilecache.rainviewer.com/v2/radar/" +
						ts +
						"/256/{z}/{x}/{y}/2/1_1.png",
					{
						tileSize: 256,
						opacity: 0.001,
						zIndex: ts,
					}
				);
			}
		}
		if (
			this.module.config.map.toUpperCase() !== "GOOGLE" &&
			!this.module.map.hasLayer(this.module.radarLayers[ts])
		) {
			this.module.map.addLayer(this.module.radarLayers[ts]);
		}
	}

	showFrame(nextPosition) {
		const preloadingDirection =
			nextPosition - this.animationPosition > 0 ? 1 : -1;

		this.changeRadarPosition(nextPosition);
		this.changeRadarPosition(nextPosition + preloadingDirection, true);
	}

	changeRadarPosition(position, preloadOnly) {
		while (position >= this.module.timestamps.length) {
			position -= this.module.timestamps.length;
		}
		while (position < 0) {
			position += this.module.timestamps.length;
		}

		const currentTimestamp = this.module.timestamps[
			this.module.animationPosition
		];
		const nextTimestamp = this.module.timestamps[position];

		this.addLayer(nextTimestamp);

		if (preloadOnly) {
			return;
		}

		this.module.animationPosition = position;

		if (this.module.radarLayers[currentTimestamp]) {
			this.module.radarLayers[currentTimestamp].setOpacity(0);
		}
		this.module.radarLayers[nextTimestamp].setOpacity(
			this.module.config.opacity
		);

		if (this.module.config.displayTime) {
			const time = moment(nextTimestamp * 1000);
			if (this.module.config.timezone) {
				time.tz(this.module.config.timezone);
			}
			let hourSymbol = "HH";
			if (this.module.config.timeFormat !== 24) {
				hourSymbol = "h";
			}

			document.getElementById("rain-map-time").innerHTML = `${time.format(
				hourSymbol + ":mm"
			)}`;
		}
	}
}
