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
		script.src = `https://maps.googleapis.com/maps/api/js?key=${this.config.key}`;
		script.setAttribute("defer", "");
		script.setAttribute("async", "");
		document.body.appendChild(script);

		script.onload = function () {
			this.module.map = new google.maps.Map(
				document.getElementById("rain-map-map"),
				{
					zoom: this.config.zoom,
					mapTypeId: this.config.mapTypeId,
					center: {
						lat: this.config.lat,
						lng: this.config.lng,
					},
					disableDefaultUI: this.config.disableDefaultUI,
					backgroundColor: this.config.backgroundColor,
				}
			);

			this.module.config.markers.forEach((marker) => {
				new google.maps.Marker({
					position: {
						lat: marker.lat,
						lng: marker.lng,
					},
					map: self.map,
				});
			});

			callback();
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
}
