# MMM-RAIN-MAP (Beta)

This is another Rain Radar Map for [Magic Mirror](https://magicmirror.builders/).  
It is inspired by [MMM-RAIN-RADAR by jojoduquartier](https://github.com/jojoduquartier/MMM-RAIN-RADAR) but uses [Rainviewer API example](https://github.com/rainviewer/rainviewer-api-example) instead of an iframe.  
Click here for the Magic Mirror [Forum Thread](https://forum.magicmirror.builders/topic/12808/mmm-rain-map)

## Features

- Shows Rainviewer.com rain data on OpenStreet Map or Google Maps.
- Option to support multiple, alternating zoom levels
- Option to only show on rain (dependency to currentweather module)
- Option to add markers on map

## Installing the Module

Navigate to the MagicMirror subfolder "modules" and execute the following command  
`git clone https://github.com/jalibu/MMM-RAIN-MAP.git`

## Google API Key

Obtain an api at [Google Developer's page](https://developers.google.com/maps/documentation/javascript/).

## Usage

To use this module, add it to the modules array in the `config/config.js` file:

### Sample

```javascript
{
	module: "MMM-RAIN-MAP",
	position: "top_left",
	config: {
		animationSpeed: 600,
		height: "420px",
		width: "420px",
		map: "GOOGLE",
		key: "<INSERT_HERE>",
		lat: 50,
		lng: 8.27,
		mapTypeId: "terrain",
		markers: [{ lat: 50, lng: 8.27 }],
		onlyOnRain: true,
		opacity: 0.75,
		showClockSymbol: false,
		updateIntervalInSeconds: 300,
		zoom: 8,
		zoomOutEach: 2,
		zoomOutLevel: 2,
	}
}
```

### Options

| Option                    | Description                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `map`                     | Map API (Possible values: `GOOGLE` or `OSM` (OpenStreet Map)) <br><br>**Type:** `string` (pixels) <br> **Default value:**     `OSM`                                                                         |
| `key`                     | _Required if Google_ Google Maps API Key key.                                                                                                                                                               |
| `lat`                     | _Required_ Latitude used to center the map.<br><br>**Type:** `float`                                                                                                                                        |
| `lng`                     | _Required_ Longitude used to center the map.<br><br>**Type:** `float`                                                                                                                                       |
| `height`                  | Height of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `420px`                                                                                                                      |
| `width`                   | Width of the map. <br><br>**Type:** `string` (pixels) <br> **Default value:** `420px`                                                                                                                       |
| `zoom`                    | Zoom value to display from lat/lng. <br><br>**Type:** `integer` <br> **Default value:** `8`                                                                                                                 |
| `mapTypeId`               | [Google Maps Only] The map type to display (roadmap, satellite, hybrid, terrain). <br><br>**Type:** `string` <br> **Default value:** `terrain`                                                              |  |
| `disableDefaultUI`        | [Google Maps Only] Disable default UI buttons (Zoom and Street View). <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                            |
| `markers`                 | Additional markers in the map as an array. See example.                                                                                                                                                     |
| `backgroundColor`         | [Google Maps Only] Backgound behind the map.Can be set to transparent (`'hsla(0, 0%, 0%, 0)'`) or left at black (default). <br><br>**Type:** `string` <br> **Default value:** `'rgba(0, 0, 0, 0)'`          |
| `updateIntervalInSeconds` | Update interval for fetching new radar frames in seconds. (New frames are released every 10 minutes) <br><br>**Type:** `int` <br> **Default value:** `300`                                                  |
| `animationSpeed`          | Determines how fast the frames are played (time per frame in milliseconds). <br><br>**Type:** `int` <br> **Default value:** `600`                                                                           |
| `extraDelayLastFrame`     | Add an extra delay the last frame to stop the animation with the current radar overlay (time in milliseconds)<br><br>**Type:** `int` <br> **Default value:** `2000`                                         |
| `opacity`                 | Opacity of radar overlay on map. <br><br>**Type:** `float` <br> **Default value:** `0.6`                                                                                                                    |
| `onlyOnRain`              | If set to true, the map is only shown when currentweather module shows rain or show icon. <br><br>**Type:** `boolean` <br> **Default value:** `false`                                                       |
| `displayTime`             | Show time for each frame. <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                                                                        |
| `displayClockSymbol`      | Show clock symbol before the time. <br><br>**Type:** `boolean` <br> **Default value:** `true`                                                                                                               |
| `zoomOutEach`             | If set to a number higher than 0, the map zooms out after n rotations of frames. It zooms back to default zoom level after the same number of rotations.<br><br>**Type:** `int` <br> **Default value:** `0` |
| `zoomOutLevel`            | If zoomOutEach is higher 0, this setting determines how far the map zooms out.<br><br>**Type:** `int` <br> **Default value:** `3`                                                                           |
