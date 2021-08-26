# MMM-RAIN-MAP

A Rain Radar Map for [Magic Mirror](https://magicmirror.builders/) based on the [Rainviewer API](https://github.com/rainviewer/rainviewer-api-example).  
Click here for the [Forum Thread](https://forum.magicmirror.builders/topic/12808/mmm-rain-map).

#### Support
If you like this module and want to thank, please buy me a beer.

<a href="https://www.buymeacoffee.com/jalibu" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Beer" style="height: 45px !important;width: 180px !important;" ></a>

## Features

- Displays Rainviewer.com radar layers on OpenStreetMap
  * Every 10 minutes a new weather snapshot is published
  * The snapshots of the last 2 hours are available, which show the weather events of the past
  * Additionally 3 layers are displayed as forecast of the next 30 minutes
- Option to place multiple markers on map  
- Option for multiple, alternating map positions
- Option to only show in current rainy weather conditions. Works only together with [weather](https://github.com/MichMich/MagicMirror/tree/master/modules/default/weather) or [MMM-OpenWeatherForecast](https://github.com/jclarke0000/MMM-OpenWeatherForecast) as dependency.
- (Experimental) Option to hide other modules in case of rain in favor to get more space.

### Demo
https://user-images.githubusercontent.com/25933231/130909536-e096d342-19d5-4139-b057-e01dc9ef71d7.mov

## Installing the Module

1. Navigate to the MagicMirror subfolder "modules" and execute the following command

	```sh
	git clone https://github.com/jalibu/MMM-RAIN-MAP.git
	```

2. Add the module in the `config/config.js` file (sample configuration):

	```javascript
	{
		module: "MMM-RAIN-MAP",
		position: "top_left",
		config: {
			animationSpeedMs: 400,
			colorizeTime: true,
			defaultZoomLevel: 8,
			displayTime: true,
			displayTimeline: true,
			displayClockSymbol: true,
			displayOnlyOnRain: false,
			extraDelayLastFrameMs: 1000,
			extraDelayCurrentFrameMs: 3000,
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
			substitudeModules: [],
			updateIntervalInSeconds: 300,
		}
	}
	```

## Options

| Option                  | Description                                                                                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animationSpeedMs`      | Determines how fast the frames are played. <br><br>**Type:** `int` <br> **Default value:** `400` (time per frame in milliseconds)                                                                          |
| `colorizeTime`    | Set true, to colorize history and forecast timestamps. <br><br>**Type:** `boolean` <br> **Default value:** `true`              |
| `defaultZoomLevel`      | Fallback/default zoom value that is used if it is not explicitly set in a MapPostion. <br><br>**Type:** `int`<br>**Range:** `0 (whole world) - 20 (small building)`<br> **Default value:** `8`  |
| `displayTime`           | Set true, to display the time for each frame. <br><br>**Type:** `boolean` <br> **Default value:** `true`         |
| `displayClockSymbol`    | Set true, to display a clock symbol as time prefix. <br><br>**Type:** `boolean` <br> **Default value:** `true`              |
| `displayTimeline`    | Set true, to display a timeline. <br><br>**Type:** `boolean` <br> **Default value:** `true`              |
| `displayOnlyOnRain`     | Set true, to only show the map if supported weather modules broadcast a current rainy weather condition.<br>Supported weather modules are: [weather](https://github.com/MichMich/MagicMirror/tree/master/modules/default/weather) and [MMM-OpenWeatherForecast](https://github.com/jclarke0000/MMM-OpenWeatherForecast). <br><br>**Type:** `boolean` <br> **Default value:** `false`              |
| `extraDelayLastFrameMs` | Add an extra delay to pause the animation on the last frame (last available forecast weather situation).<br><br>**Type:** `int` <br> **Default value:** `1000` (time in milliseconds)    |
| `extraDelayCurrentFrameMs` | Add an extra delay to pause the animation on the frame for the current weather situation.<br><br>**Type:** `int` <br> **Default value:** `3000` (time in milliseconds)    |
| `markers`               | Optional list of markers on the map.<br> See examples and Markers-Object documentation below for details. <br><br>**Type:** `array[Marker]` <br> **Default value:** `Sample set`           |
| `mapPositions`         | **Required:** List of zoom/center positions for the map.<br> See examples and MapPosition-Object documentation below for details. <br><br>**Type:** `array[MapPosition]` <br> **Default value:** `Sample set`           |
| `mapHeight`             | Height of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                   |
| `mapWidth`              | Width of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                    |
| `mapUrl`        | Option to use an alternative map. In most cases you are fine with the default but you can find more maps [here](https://wiki.openstreetmap.org/wiki/Tile_servers).<br><br>**Type:** `string`<br> **Default value:** `'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'`<br>**Alternative uncolored map:** '`https://tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png`' |
| `substitudeModules`            | (Experimental) If `displayOnlyOnRain` is turned on, you can define a list of module names that are hidden in favor of the map. <br><br>**Type:** `array[string]` <br> **Default value:** `[]` <br> **Example:** `['MMM-Jast', 'calendar']`       |
| `timeFormat`            | Option to override the Magic Mirror's global time format to 12 or 24 for this module. <br><br>**Type:** `int` <br> **Default value:** `[Global Config]` or `24`                                        |
| `updateIntervalMs`      | Update interval for fetching new radar frames from the RainViewer.com API. (New frames are released every 10 minutes) <br><br>**Type:** `int` <br> **Default value:** `300000` (time in milliseconds)                                |

### Marker Object

| Option   | Description                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lat`    | **Required:** Marker's latitude.<br><br>**Type:** `float`     |
| `lng`    | **Required:** Marker's longitude.<br><br>**Type:** `float`  |
| `color`  | Marker's color.<br><br>**Possible values:** `'black','blue','gold','green','grey','orange','red','violet','yellow'`<br>**Type:** `string` |

### MapPosition Object

| Option   | Description                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lat`    | **Required:** Position's latitude.<br><br>**Type:** `float` |
| `lng`    | **Required:** Position's longitude.<br><br>**Type:** `float` |
| `zoom`  | Either set a zoom level or defaultZoomLevel is used.<br><br>**Range:** `0 (whole world) - 20 (small building)`<br>**Type:** `number` |
| `loops`  | Number of loops/iterations until the map moves to the next position. If no number is set, a value of `1` is used.<br><br>**Type:** `number` |

## Thanks to

- All testers for their feedback
- [MMM-RAIN-RADAR by jojoduquartier](https://github.com/jojoduquartier/MMM-RAIN-RADAR) for inspiration
