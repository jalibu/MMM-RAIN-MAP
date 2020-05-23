class Utils {
	static initOSMap(module) {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
		script.setAttribute("defer", "");
		script.setAttribute("async", "");
		document.body.appendChild(script);
		script.onload = function () {
			module.map = L.map("rain-map-map", {
				zoomControl: false,
				attributionControl: false,
			}).setView([module.config.lat, module.config.lng], module.config.zoom);
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
				module.map
			);

			module.config.markers.forEach((marker) => {
				L.marker([marker.lat, marker.lng]).addTo(module.map);
			});

			module.updateData();
		};
	}

	static initGoogleMap(module) {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = `https://maps.googleapis.com/maps/api/js?key=${module.config.key}`;
		script.setAttribute("defer", "");
		script.setAttribute("async", "");
		document.body.appendChild(script);
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

	static initMapWrapper(module) {
		const app = document.createElement("div");
		app.style.height = module.config.height;
		app.style.width = module.config.width;
		app.style.position = "relative";
		app.setAttribute("id", "rain-map-wrapper");

		let markup = `<div id="rain-map-map" style="height: ${module.config.height}; width: ${module.config.width}"></div>`;
		if (module.config.displayTime) {
			markup += `<div class="rain-map-time-wrapper">
						${module.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""}
						<span id="rain-map-time"></span>
					</div>`;
		}
		app.innerHTML = markup;

		return app;
	}

	static addLayer(module, ts) {
		if (!module.radarLayers[ts]) {
			if (module.config.map.toUpperCase() === "GOOGLE") {
				module.radarLayers[ts] = new google.maps.ImageMapType({
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
				module.map.overlayMapTypes.push(module.radarLayers[ts]);
			} else {
				module.radarLayers[ts] = new L.TileLayer(
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
			module.config.map.toUpperCase() !== "GOOGLE" &&
			!module.map.hasLayer(module.radarLayers[ts])
		) {
			module.map.addLayer(module.radarLayers[ts]);
		}
	}

	static showFrame(module, nextPosition) {
		const preloadingDirection =
			nextPosition - this.animationPosition > 0 ? 1 : -1;

		this.changeRadarPosition(module, nextPosition);
		this.changeRadarPosition(module, nextPosition + preloadingDirection, true);
	}

	static changeRadarPosition(module, position, preloadOnly) {
		while (position >= module.timestamps.length) {
			position -= module.timestamps.length;
		}
		while (position < 0) {
			position += module.timestamps.length;
		}

		const currentTimestamp = module.timestamps[module.animationPosition];
		const nextTimestamp = module.timestamps[position];

		this.addLayer(module, nextTimestamp);

		if (preloadOnly) {
			return;
		}

		module.animationPosition = position;

		if (module.radarLayers[currentTimestamp]) {
			module.radarLayers[currentTimestamp].setOpacity(0);
		}
		module.radarLayers[nextTimestamp].setOpacity(module.config.opacity);

		if (module.config.displayTime) {
			const time = moment(nextTimestamp * 1000);
			if (module.config.timezone) {
				time.tz(module.config.timezone);
			}
			let hourSymbol = "HH";
			if (module.config.timeFormat !== 24) {
				hourSymbol = "h";
			}

			document.getElementById("rain-map-time").innerHTML = `${time.format(
				hourSymbol + ":mm"
			)}`;
		}
	}
}
