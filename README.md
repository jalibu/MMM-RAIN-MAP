# MMM-RAIN-MAP

A Rain Radar Map for [Magic Mirror](https://magicmirror.builders/) based on the [Rainviewer API](https://github.com/rainviewer/rainviewer-api-example).  
Click here for the [Forum Thread](https://forum.magicmirror.builders/topic/12808/mmm-rain-map).


## Features

- Shows Rainviewer.com rain data on OpenStreetMap or Google Maps
- Option to support multiple, alternating zoom levels
- Option to only show on rain (dependency to currentweather module)
- Option to add markers on map

## Installing the Module

* Navigate to the MagicMirror subfolder "modules" and execute the following command  
```sh
git clone https://github.com/jalibu/MMM-RAIN-MAP.git
```
* Add the module in the `config/config.js` file:

### Sample configuration (OpenStreetMap)

```javascript
{
	module: "MMM-RAIN-MAP",
	position: "top_left",
	config: {
		animationSpeed: 600,
		displayClockSymbol: true,
		displayTime: true,
		extraDelayLastFrame: 2000,
		height: "420px",
		lat: 50,
		lng: 8.27,
		map: "OSM",
		markers: [
			{ lat: 50, lng: 8.27, color: "red" }, 
		    { lat: 49.411, lng: 8.715, color: "blue" }
		],
		onlyOnRain: false,
		opacity: 0.65,
		timeFormat: "24",
		updateIntervalInSeconds: 300,
		width: "420px",
		zoom: 8,
		zoomOutEach: 0,
		zoomOutLevel: 2,
	}
}
```

  ### Sample configuration (Google Maps)

```javascript
{
	module: "MMM-RAIN-MAP",
	position: "top_left",
	config: {
		animationSpeed: 600,
		backgroundColor: "rgba(0, 0, 0, 0)",
		displayClockSymbol: true,
		displayTime: true,
		extraDelayLastFrame: 2000,
		height: "420px",
		key: "<INSERT_HERE>",
		lat: 50,
		lng: 8.27,
		map: "GOOGLE",
		mapTypeId: "terrain",
		markers: [
			{ lat: 50, lng: 8.27 }, 
		    { lat: 49.411, lng: 8.715 }
		],
				onlyOnRain: false,
		opacity: 0.65,
		timeFormat: "24",
		updateIntervalInSeconds: 300,
		width: "420px",
		zoom: 8,
		zoomOutEach: 0,
		zoomOutLevel: 2,
	}
}
```

## Options
### General options

| Option                    | Description                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `map`                     | Used Map API <br>Possible values: `'GOOGLE'` or `'OSM'` <br><br>**Type:** `string` <br> **Default value:**     `'OSM'`                                                                                                                                                                                                                       |
| `lat`                     | __Required:__ Latitude used to center the map.<br><br>**Type:** `float`                                                                                                                                                                                                                                                                      |
| `lng`                     | __Required:__ Longitude used to center the map.<br><br>**Type:** `float`                                                                                                                                                                                                                                                                     |
| `height`                  | Height of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                                                                                                                                                     |
| `width`                   | Width of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `'420px'`                                                                                                                                                                                                                                                      |
| `zoom`                    | Map zoom value. <br><br>**Type:** `integer` <br> **Default value:** `8`                                                                                                                                                                                                                                                                      |
| `markers`                 | Set markers in the map.<br> Example: `markers:[{lat:50, lng:8.27, color:"red"},{lat:49.411, lng:8.715, color:"blue"}]`<br>Possible colors: `'black','blue','gold','green','grey','orange','red','violet','yellow'`<br> Note: The color property only works with OpenStreetMap.<br><br>**Type:** `array[Object]` <br> **Default value:** `[]` |
| `updateIntervalInSeconds` | Update interval for fetching new radar frames. (New frames are released every 10 minutes) <br><br>**Type:** `int` <br> **Default value:** `300`  (time in seconds)                                                                                                                                                                           |
| `animationSpeed`          | Determines how fast the frames are played. <br><br>**Type:** `int` <br> **Default value:** `600`   (time per frame in milliseconds)                                                                                                                                                                                                          |
| `extraDelayLastFrame`     | Add an extra delay to pause the animation on the latest frame.<br><br>**Type:** `int` <br> **Default value:** `2000` (time in milliseconds)                                                                                                                                                                                                  |
| `opacity`                 | Opacity of radar overlay on map. <br><br>**Type:** `float` <br> **Default value:** `0.6`                                                                                                                                                                                                                                                     |
| `onlyOnRain`              | If set to true, the map is only displayed when `currentweather module` shows rain or snow icon. <br><br>**Type:** `boolean` <br> **Default value:** `false`                                                                                                                                                                                  |
| `displayTime`             | Display the time for each frame. <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                                                                                                                                                                                                  |
| `displayClockSymbol`      | Display clock symbol as time prefix. <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                                                                                                                                                                                              |
| `zoomOutEach`             | If set to a number higher than 0, the map zooms out after n rotations of frames. It zooms back to default zoom level after the same number of rotations.<br><br>**Type:** `int` <br> **Default value:** `0` (disabled)                                                                                                                       |
| `zoomOutLevel`            | If zoomOutEach is higher 0, this setting determines how far the map zooms out.<br><br>**Type:** `int` <br> **Default value:** `3`                                                                                                                                                                                                            |

### Google Maps only options

| Option             | Description                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`              | API key for Google Maps. Get a key at [Google Developer's page](https://developers.google.com/maps/documentation/javascript/).<br><br>**Type:** `string` <br> **Default value:**     `''` |
| `backgroundColor`  | Backgound behind the map. <br>Can be set to transparent (`'hsla(0, 0%, 0%, 0)'`) or left at black (default). <br><br>**Type:** `string` <br> **Default value:** `'rgba(0, 0, 0, 0)'`      |
| `disableDefaultUI` | Disable default UI buttons (Zoom and Street View). <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                             |
| `mapTypeId`        | The map type to display.<br>Possible values: `'roadmap', 'satellite', 'hybrid', 'terrain'`. <br><br>**Type:** `string` <br> **Default value:** `'terrain'`                                |



## Thanks to
- All testers for their feedback
- [MMM-RAIN-RADAR by jojoduquartier](https://github.com/jojoduquartier/MMM-RAIN-RADAR) for inspiration