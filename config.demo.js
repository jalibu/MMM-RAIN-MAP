/**
 * Demo configuration for MMM-RAIN-MAP module development
 * This config is used for testing the module in isolation
 *
 * Usage: node --run demo
 */

const config = {
  port: 8080,
  address: 'localhost',
  language: 'de',
  logLevel: ['INFO', 'LOG', 'WARN', 'ERROR'],
  timeFormat: 24,
  units: 'metric',

  modules: [
    {
      module: 'alert'
    },
    {
      module: 'clock',
      position: 'bottom_right',
      config: {
        timeFormat: 'HH:mm:ss'
      }
    },

    {
      module: 'MMM-RAIN-MAP',
      header: 'RainViewer',
      position: 'top_left',
      config: {
        provider: 'rainviewer'
      }
    },
    {
      module: 'MMM-RAIN-MAP',
      header: 'LibreWXR',
      position: 'top_right',
      config: {
        provider: 'librewxr',
        providerUrl: 'https://api.librewxr.net'
      }
    }
  ]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config
}
