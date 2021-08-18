# MMM-RAIN-MAP

A Rain Radar Map for [Magic Mirror](https://magicmirror.builders/) based on the [Rainviewer API](https://github.com/rainviewer/rainviewer-api-example).  
Click here for the [Forum Thread](https://forum.magicmirror.builders/topic/12808/mmm-rain-map).

#### Support
If you like this module and want to thank, please buy me a beer.

<a href="https://www.buymeacoffee.com/jalibu" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Beer" style="height: 45px !important;width: 180px !important;" ></a>

## Features

- Displays Rainviewer.com radar layers on OpenStreetMap
- Option to place multiple markers on map  
- Option for multiple, alternating map positions
- Option to only show in current rainy weather conditions. Works only together with [weather](https://github.com/MichMich/MagicMirror/tree/master/modules/default/weather) or [MMM-OpenWeatherForecast](https://github.com/jclarke0000/MMM-OpenWeatherForecast) as dependency.
- **Important note:** The underlaying RainViewer.com free plan only supports history data. This is **no forecast**!  

### Screenshot
![](docs/OSM_ScreenCast.gif)

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
			defaultZoomLevel: 8,
			displayTime: true,
			displayClockSymbol: true,
			displayOnlyOnRain: false,
			extraDelayLastFrameMs: 2000,
			markers: [
				{ lat: 49.41, lng: 8.717, color: "red" },
				{ lat: 48.856, lng: 2.35, color: "green" },
			],
			zoomPositions: [
				{ lat: 49.41, lng: 8.717, zoom: 9, loops: 1 },
				{ lat: 49.41, lng: 8.717, zoom: 6, loops: 2 },
				{ lat: 48.856, lng: 2.35, zoom: 6, loops: 1 },
				{ lat: 48.856, lng: 2.35, zoom: 9, loops: 2 },
				{ lat: 49.15, lng: 6.154, zoom: 5, loops: 2 },
			],
			mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			mapHeight: "420px",
			mapWidth: "420px",
			updateIntervalInSeconds: 300,
		}
	}
	```

## Options

| Option                  | Description                                                                                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animationSpeedMs`      | Determines how fast the frames are played. <br><br>**Type:** `int` <br> **Default value:** `400` (time per frame in milliseconds)                                                                          |
| `defaultZoomLevel`      | Fallback/default zoom value that is used if it is not explicitly set in a MapPostion. <br><br>**Type:** `int`<br>**Range:** `0 (hole world) - 20 (small building)`<br> **Default value:** `8`  |
| `displayTime`           | Set true, to display the time for each frame. <br><br>**Type:** `boolean` <br> **Default value:** `true`         |
| `displayClockSymbol`    | Set true, to display a clock symbol as time prefix. <br><br>**Type:** `boolean` <br> **Default value:** `true`              |
| `displayOnlyOnRain`     | Set true, to only show the map if supported weather modules broadcast a current rainy weather condition.<br>Supported weather modules are: [weather](https://github.com/MichMich/MagicMirror/tree/master/modules/default/weather) and [MMM-OpenWeatherForecast](https://github.com/jclarke0000/MMM-OpenWeatherForecast). <br><br>**Type:** `boolean` <br> **Default value:** `false`              |
| `extraDelayLastFrameMs` | Add an extra delay to pause the animation on the latest frame (current weather situation).<br><br>**Type:** `int` <br> **Default value:** `2000` (time in milliseconds)    |
| `markers`               | Optional list of markers on the map.<br> See examples and Markers-Object documentation below for details. <br><br>**Type:** `array[Marker]` <br> **Default value:** `Sample set`           |
| `mapPositions`         | **Required:** List of zoom/center positions for the map.<br> See examples and MapPosition-Object documentation below for details. <br><br>**Type:** `array[MapPosition]` <br> **Default value:** `Sample set`           |
| `mapHeight`             | Height of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                   |
| `mapWidth`              | Width of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                    |
| `mapUrl`        | Option to use an alternative map. In most cases you are fine with the default but you can find more maps [here](https://wiki.openstreetmap.org/wiki/Tile_servers).<br><br>**Type:** `string`<br> **Default value:** `'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'`<br>**Alternative uncolored map:** '`https://tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png`' |
| `timeFormat`            | Option to override the Magic Mirror's global the time format to 12 or 24 for this module. <br><br>**Type:** `int` <br> **Default value:** `[Global Config]` or `24`                                        |
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
| `zoom`  | Either set a zoom level or defaultZoomLevel is used.<br><br>**Range:** `0 (hole world) - 20 (small building)`<br>**Type:** `number` |
| `loops`  | Number of loops/iterations until the map moves to the next position. If no number is set, a value of `1` is used.<br><br>**Type:** `number` |

## Thanks to

- All testers for their feedback
- [MMM-RAIN-RADAR by jojoduquartier](https://github.com/jojoduquartier/MMM-RAIN-RADAR) for inspiration
