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
			changeSubstitureModuleVisibility?: Function;
		}
	): void;
}

type Config = {
	animationSpeedMs: number;
	colorizeTime: boolean;
	defaultZoomLevel: number;
	displayTime: boolean;
	displayClockSymbol: boolean;
	displayTimeline: boolean;
	displayOnlyOnRain: boolean;
	extraDelayLastFrameMs: number;
	extraDelayCurrentFrameMs: number;
	markers: Marker[];
	mapPositions: MapPosition[];
	mapUrl: string;
	mapHeight: string;
	mapWidth: string;
	substitudeModules: string[];
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
	animationTimer: any;
	animationPosition: number;
	map: any;
	mapPosition: number;
	numHistoryFrames: number;
	numForecastFrames: number;
	radarLayers: any[];
	loopNumber: number;
	timeDiv: Element;
	timeframes: number[];
};

declare const moment: Function;
declare const config: any;
declare const MM: any;
