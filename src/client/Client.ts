import * as L from 'leaflet'
import Utils from './Utils'
import { Config } from '../types/Config'

// Global or injected variable declarations
declare const moment: any

Module.register<Config>('MMM-RAIN-MAP', {
  defaults: {
    animationSpeedMs: 400,
    colorizeTime: true,
    defaultZoomLevel: 8,
    displayClockSymbol: true,
    displayTime: true,
    displayTimeline: true,
    displayOnlyOnRain: false,
    substitudeModules: [],
    extraDelayLastFrameMs: 2000,
    extraDelayCurrentFrameMs: 2000,
    markers: [
      { lat: 49.41, lng: 8.717, color: 'red' },
      { lat: 48.856, lng: 2.35, color: 'green' }
    ],
    mapPositions: [
      { lat: 49.41, lng: 8.717, zoom: 9, loops: 1 },
      { lat: 49.41, lng: 8.717, zoom: 6, loops: 2 },
      { lat: 48.856, lng: 2.35, zoom: 6, loops: 1 },
      { lat: 48.856, lng: 2.35, zoom: 9, loops: 2 },
      { lat: 49.15, lng: 6.154, zoom: 5, loops: 2 }
    ],
    mapUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    mapHeight: '420px',
    mapWidth: '420px',
    maxHistoryFrames: -1,
    maxForecastFrames: -1,
    timeFormat: config.timeFormat || 24,
    timezone: null,
    updateIntervalInSeconds: 300
  },

  _runtimeData: {
    animationPosition: 0,
    animationTimer: null,
    map: null,
    mapPosition: 0,
    numHistoryFrames: 0,
    numForecastFrames: 0,
    loopNumber: 1,
    radarLayers: [],
    timeDiv: null,
    timeframes: []
  },

  getStyles() {
    return ['font-awesome.css', 'leaflet.css', 'MMM-RAIN-MAP.css']
  },

  getScripts() {
    return ['moment.js', 'moment-timezone.js']
  },

  getTranslations() {
    return {
      en: 'translations/en.json',
      de: 'translations/de.json'
    }
  },

  getDom() {
    // Create app-wrapper
    const app = document.createElement('div')
    app.classList.add('rain-map-wrapper')

    // Create time-wrapper
    if (this.config.displayTime) {
      const timeWrapperDiv = document.createElement('div')
      timeWrapperDiv.classList.add('rain-map-time-wrapper')
      timeWrapperDiv.innerHTML = `${this.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ''}`
      this._runtimeData.timeDiv = document.createElement('span')
      this._runtimeData.timeDiv.classList.add('rain-map-time')
      timeWrapperDiv.appendChild(this._runtimeData.timeDiv)

      if (this.config.displayTimeline) {
        const timelineWrapper = document.createElement('span')
        timelineWrapper.classList.add('rain-map-timeline-wrapper')

        this._runtimeData.sliderDiv = document.createElement('span')
        this._runtimeData.sliderDiv.classList.add('rain-map-timeslider')
        timelineWrapper.appendChild(this._runtimeData.sliderDiv)
        this._runtimeData.timelineDiv = document.createElement('span')
        this._runtimeData.timelineDiv.classList.add('rain-map-timeline')
        timelineWrapper.appendChild(this._runtimeData.timelineDiv)

        timeWrapperDiv.appendChild(timelineWrapper)
      }

      app.appendChild(timeWrapperDiv)
    }

    // Create map
    const mapDiv = document.createElement('div')
    mapDiv.style.height = this.config.mapHeight
    mapDiv.style.width = this.config.mapWidth
    app.appendChild(mapDiv)

    // Temporary add app-wrapper to body, otherwise leaflet won't initialize correctly
    document.body.appendChild(app)

    const firstPosition = this.config.mapPositions[0]

    this._runtimeData.map = L.map(mapDiv, {
      zoomControl: false,
      trackResize: false,
      attributionControl: false
    }).setView([firstPosition.lat, firstPosition.lng], firstPosition.zoom)

    // Sanitize map URL
    L.tileLayer(this.config.mapUrl.split('$').join('')).addTo(this._runtimeData.map)

    for (const marker of this.config.markers) {
      L.marker([marker.lat, marker.lng], {
        icon: new L.Icon({
          iconUrl: this.file(`img/marker-icon-2x-${Utils.getIconColor(marker)}.png`),
          shadowUrl: this.file(`img/marker-shadow.png`),
          iconSize: [25, 41],
          shadowSize: [41, 41]
        })
      }).addTo(this._runtimeData.map)
    }

    // Once the map is initialized, we can remove the app-wrapper from the body and return it to the getDom() function
    document.body.removeChild(app)

    return app
  },

  start() {
    this.scheduleUpdate()
    this.play()
  },

  scheduleUpdate() {
    const self = this
    this.loadData()
    setInterval(() => {
      self.loadData()
    }, this.config.updateIntervalInSeconds * 1000)
  },

  play() {
    const self = this
    let extraDelay = 0
    if (self._runtimeData.animationPosition === self._runtimeData.timeframes.length - 1) {
      extraDelay = this.config.extraDelayLastFrameMs
    } else if (self._runtimeData.animationPosition === this._runtimeData.numHistoryFrames - 1) {
      extraDelay = this.config.extraDelayCurrentFrameMs
    }

    this._runtimeData.animationTimer = setTimeout(() => {
      self.tick()
      self.play()
    }, this.config.animationSpeedMs + extraDelay)
  },

  tick() {
    if (!this._runtimeData.map || this._runtimeData.timeframes.length === 0) {
      return
    }

    const nextAnimationPosition =
      this._runtimeData.animationPosition < this._runtimeData.timeframes.length - 1
        ? this._runtimeData.animationPosition + 1
        : 0

    // Manage map positions
    if (nextAnimationPosition === 0 && this.config.mapPositions.length > 1) {
      const currentMapPosition = this.config.mapPositions[this._runtimeData.mapPosition]

      if (this._runtimeData.loopNumber === (currentMapPosition.loops || 1)) {
        this._runtimeData.loopNumber = 1
        const nextMapPosition =
          this._runtimeData.mapPosition === this.config.mapPositions.length - 1 ? 0 : this._runtimeData.mapPosition + 1
        this._runtimeData.mapPosition = nextMapPosition
        const nextPosition = this.config.mapPositions[nextMapPosition]
        this._runtimeData.map.setView(
          new L.LatLng(nextPosition.lat, nextPosition.lng),
          nextPosition.zoom || this.config.defaultZoomLevel,
          {
            animation: false
          }
        )
      } else {
        this._runtimeData.loopNumber++
      }
    }

    // Manage radar layers
    const currentTimeframe = this._runtimeData.timeframes[this._runtimeData.animationPosition]
    const currentRadarLayer = this._runtimeData.radarLayers[currentTimeframe.time]

    const nextTimeframe = this._runtimeData.timeframes[nextAnimationPosition]
    const nextRadarLayer = this._runtimeData.radarLayers[nextTimeframe.time]

    if (nextRadarLayer) {
      nextRadarLayer.setOpacity(1)
    }
    if (currentRadarLayer) {
      currentRadarLayer.setOpacity(0.001)
    }

    // Manage time
    if (this.config.displayTime) {
      const time = moment(nextTimeframe.time * 1000)
      if (this.config.timezone) {
        time.tz(this.config.timezone)
      }
      const hourSymbol = this.config.timeFormat === 24 ? 'HH' : 'h'
      this._runtimeData.timeDiv.innerHTML = `${time.format(hourSymbol + ':mm')}`

      if (this.config.colorizeTime) {
        if (nextAnimationPosition < this._runtimeData.numHistoryFrames - 1) {
          this._runtimeData.timeDiv.classList = 'rain-map-time rain-map-history'
        } else if (nextAnimationPosition === this._runtimeData.numHistoryFrames - 1) {
          this._runtimeData.timeDiv.classList = 'rain-map-time rain-map-now'
        } else {
          this._runtimeData.timeDiv.classList = 'rain-map-time rain-map-forecast'
        }
      }

      if (this.config.displayTimeline) {
        this._runtimeData.sliderDiv.style.left = `${this._runtimeData.percentPerFrame * nextAnimationPosition}%`
      }
    }
    this._runtimeData.animationPosition = nextAnimationPosition
  },

  loadData() {
    const self = this
    fetch('https://api.rainviewer.com/public/weather-maps.json').then(async (response) => {
      if (response.ok) {
        const results = await response.json()

        // Sanitite and filter new frames
        const { historyFrames, forecastFrames } = Utils.sanitizeAndFilterFrames(results, self.config)
        self._runtimeData.numHistoryFrames = historyFrames.length
        self._runtimeData.numForecastFrames = forecastFrames.length
        self._runtimeData.timeframes = [...historyFrames, ...forecastFrames]

        // Clear old radar layers
        self._runtimeData.map.eachLayer((layer) => {
          if (layer instanceof L.TileLayer && layer._url.includes('rainviewer.com')) {
            self._runtimeData.map.removeLayer(layer)
          }
        })

        self._runtimeData.radarLayers = []

        // Add new radar layers
        for (const timeframe of self._runtimeData.timeframes) {
          const radarLayer = new L.TileLayer(
            'https://tilecache.rainviewer.com' + timeframe.path + '/256/{z}/{x}/{y}/2/1_1.png',
            {
              tileSize: 256,
              opacity: 0.001,
              zIndex: timeframe
            }
          )
          self._runtimeData.radarLayers[timeframe.time] = radarLayer
          if (!self._runtimeData.map.hasLayer(radarLayer)) {
            self._runtimeData.map.addLayer(radarLayer)
          }
        }

        self._runtimeData.animationPosition = 0

        // Prepare timeline
        if (this.config.displayTimeline) {
          try {
            this._runtimeData.percentPerFrame =
              100 / (self._runtimeData.numHistoryFrames + self._runtimeData.numForecastFrames)
            const historyPart = (self._runtimeData.numHistoryFrames - 1) * this._runtimeData.percentPerFrame
            const forecastPart = self._runtimeData.numForecastFrames * this._runtimeData.percentPerFrame
            this._runtimeData.timelineDiv.style.background = `linear-gradient(to right, var(--color-history) 0% ${historyPart}%, var(--color-now) ${historyPart}% ${
              historyPart + this._runtimeData.percentPerFrame
            }%, var(--color-forecast) ${forecastPart}%)`
          } catch (err) {
            console.warn('Error rendering the map timeline')
          }
        }

        console.debug('Done processing latest RainViewer API request.')
      } else {
        console.error('Error fetching RainViewer timeframes', response.statusText)
      }
    })
  },

  notificationReceived(notificationIdentifier: string, payload: any) {
    if (this.config.displayOnlyOnRain) {
      if (notificationIdentifier === 'OPENWEATHER_FORECAST_WEATHER_UPDATE') {
        const currentCondition = payload.current?.weather[0]?.icon
        this.handleCurrentWeatherCondition(currentCondition)
      } else if (notificationIdentifier === 'CURRENTWEATHER_TYPE') {
        const currentCondition = payload.type
        this.handleCurrentWeatherCondition(currentCondition)
      } else if (notificationIdentifier === 'DOM_OBJECTS_CREATED') {
        Utils.changeSubstituteModuleVisibility(false, this.config)
      }
    }
  },

  handleCurrentWeatherCondition(currentCondition: string) {
    if (currentCondition && Utils.rainConditions.findIndex((condition) => currentCondition.includes(condition)) >= 0) {
      if (!this._runtimeData.animationTimer) {
        Utils.changeSubstituteModuleVisibility(false, this.config)
        this.show(300, null, { lockString: this.identifier })
        this.play()
      }
    } else {
      if (this._runtimeData.animationTimer) {
        this.hide(300, null, { lockString: this.identifier })
        clearTimeout(this._runtimeData.animationTimer)
        this._runtimeData.animationTimer = null
        Utils.changeSubstituteModuleVisibility(true, this.config)
      }
    }
  }
})
