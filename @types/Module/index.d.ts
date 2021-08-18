declare module Module {
	export function register(
		moduleName: string,
		moduleProperties: {
			runtimeData?: RuntimeData;
			defaults?: Config;
			config?: Config;
			getDom?: Function;
			getHeader?: Function;
			getScripts?: Function;
			getStyles?: Function;
			getTemplate?: Function;
			getTemplateData?: Function;
			getTranslations?: Function;
			loadData?: Function;
			notificationReceived?: Function;
			scheduleUpdate?: Function;
			socketNotificationReceived?: Function;
			start?: Function;
			play?: Function;
			tick?: Function;
			handleCurrentWeatherCondition?: Function;
		}
	): void;
}

type Config = {
	animationSpeedMs: number;
	defaultZoomLevel: number;
	displayTime: boolean;
	displayClockSymbol: boolean;
	displayOnlyOnRain: boolean;
	extraDelayLastFrameMs: number;
	markers: Marker[];
	mapPositions: MapPosition[];
	mapUrl: string;
	mapHeight: string;
	mapWidth: string;
	timeFormat: any;
	updateIntervalInSeconds: number;
};

type Marker = {
	lat: number;
	lng: number;
	color?: string;
};

type MapPosition = {
	lat: number;
	lng: number;
	zoom?: number;
	loops?: number;
};

type RuntimeData = {
	map: any;
	timeframes: number[];
	radarLayers: any[];
	animationTimer: any;
	animationPosition: number;
	mapPosition: number;
	loopNumber: number;
	timeDiv: Element;
};

declare const moment: Function;
declare const config: any;