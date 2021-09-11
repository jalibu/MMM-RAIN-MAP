export type Config = {
  animationSpeedMs: number
  colorizeTime: boolean
  defaultZoomLevel: number
  displayClockSymbol: boolean
  displayTime: boolean
  displayTimeline: boolean
  displayOnlyOnRain: boolean
  substitudeModules: string[]
  extraDelayLastFrameMs: number
  extraDelayCurrentFrameMs: number
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

type Marker = { lat: number; lng: number; color?: string }

type MapPosition = { lat: number; lng: number; zoom: number; loops?: number }
