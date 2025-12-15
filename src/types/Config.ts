export interface Config {
  animationSpeedMs: number
  colorizeTime: boolean
  colorScheme: number
  defaultZoomLevel: number
  displayClockSymbol: boolean
  displayTime: boolean
  displayTimeline: boolean
  displayHoursBeforeRain: number
  substitudeModules: string[]
  extraDelayLastFrameMs: number
  extraDelayCurrentFrameMs: number
  invertColors: boolean
  markers: Marker[]
  mapPositions: MapPosition[]
  mapUrl: string
  mapHeight: string
  mapWidth: string
  maxHistoryFrames: number
  maxForecastFrames: number
  timeFormat: number
  timezone: string
  updateIntervalInSeconds: number
}

export interface Marker {
  lat: number
  lng: number
  color?: string
}

interface MapPosition {
  lat: number
  lng: number
  zoom: number
  loops?: number
}
