import * as Log from 'logger'
import { Config, Marker } from '../types/Config'

// Global or injected variable declarations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const MM: any

export default class RainMapUtils {
  static supportedIconColors = ['black', 'blue', 'gold', 'green', 'grey', 'orange', 'red', 'violet', 'yellow']

  static rainConditions = [
    '09d',
    '09n',
    '10d',
    '10n',
    '11d',
    '11n',
    '13d',
    '13n',
    'showers',
    'thunderstorm',
    'sleet',
    'rain',
    'snow'
  ]

  static getIconColor(marker: Marker): string {
    return marker.color && RainMapUtils.supportedIconColors.includes(marker.color) ? marker.color : 'red'
  }

  static sanitizeAndFilterFrames(
    results: { radar: { past: string[]; nowcast: string[] } },
    config: Config
  ): { historyFrames: string[]; forecastFrames: string[] } {
    let historyFrames = results.radar?.past || []
    let forecastFrames = results.radar?.nowcast || []

    if (config.maxHistoryFrames >= 0 && historyFrames.length >= config.maxHistoryFrames) {
      historyFrames = historyFrames.slice(-config.maxHistoryFrames)
    }

    if (config.maxForecastFrames >= 0 && forecastFrames.length >= config.maxForecastFrames) {
      forecastFrames = forecastFrames.slice(-config.maxForecastFrames)
    }

    return { historyFrames, forecastFrames }
  }

  static changeSubstituteModuleVisibility(show: boolean, config: Config): void {
    if (config.substitudeModules) {
      try {
        for (const curr of config.substitudeModules) {
          const substituteModule = MM.getModules().find((module) => module.name === curr)
          if (!substituteModule) {
            Log.warn(`No substitute module found with name ${curr}`)

            continue
          }
          if (show) {
            substituteModule.show(300, undefined, { lockString: 'MMM-RAIN-MAP' })
          } else {
            substituteModule.hide(300, undefined, { lockString: 'MMM-RAIN-MAP' })
          }
        }
      } catch (err) {
        Log.error(err)
      }
    }
  }
}
