const assert = require('node:assert/strict')
const { test, describe } = require('node:test')
const fs = require('node:fs')
const path = require('node:path')

/**
 * Unit tests for MMM-RAIN-MAP configuration defaults and validation
 *
 * Tests verify the default configuration values match expectations
 * and are set to reasonable values to avoid API rate limiting.
 *
 * Note: We parse the TypeScript source directly to avoid loading
 * the compiled module which includes the entire Leaflet library.
 */

/**
 * Extract defaults from TypeScript source file
 */
function extractDefaults() {
  const tsPath = path.join(__dirname, '../../src/frontend/Frontend.ts')
  const content = fs.readFileSync(tsPath, 'utf8')

  const defaults = {}

  // Parse individual values directly from the source file
  const patterns = [
    { key: 'provider', regex: /provider:\s*'([^']+)'/ },
    { key: 'animationSpeedMs', regex: /animationSpeedMs:\s*(\d+)/ },
    { key: 'defaultZoomLevel', regex: /defaultZoomLevel:\s*(\d+)/ },
    { key: 'maxHistoryFrames', regex: /maxHistoryFrames:\s*(-?\d+)/ },
    { key: 'maxForecastFrames', regex: /maxForecastFrames:\s*(-?\d+)/ },
    { key: 'updateIntervalInSeconds', regex: /updateIntervalInSeconds:\s*(\d+)/ }
  ]

  for (const { key, regex } of patterns) {
    const match = content.match(regex)
    if (match) {
      defaults[key] = key === 'provider' ? match[1] : parseInt(match[1], 10)
    }
  }

  return defaults
}

const defaults = extractDefaults()

describe('MMM-RAIN-MAP Configuration', () => {
  describe('Default Values', () => {
    test('defaults were extracted from source', () => {
      assert.ok(defaults, 'Defaults should be extracted')
      assert.ok(Object.keys(defaults).length > 0, 'Defaults should have values')
    })

    test('animationSpeedMs is set to 800 (optimized for API load)', () => {
      assert.equal(defaults.animationSpeedMs, 800)
    })

    test('provider defaults to RainViewer', () => {
      assert.equal(defaults.provider, 'rainviewer')
    })

    test('defaultZoomLevel is set to 6 (optimized for API load)', () => {
      assert.equal(defaults.defaultZoomLevel, 6)
    })

    test('maxHistoryFrames is set to 6 (optimized for API load)', () => {
      assert.equal(defaults.maxHistoryFrames, 6)
    })

    test('maxForecastFrames is set to 0 (forecast unavailable in free API)', () => {
      assert.equal(defaults.maxForecastFrames, 0)
    })

    test('updateIntervalInSeconds is set to 600 (aligned with API)', () => {
      assert.equal(defaults.updateIntervalInSeconds, 600)
    })
  })

  describe('API Rate Limiting Prevention', () => {
    test('total frames (history + forecast) does not exceed 12', () => {
      const totalFrames = defaults.maxHistoryFrames + defaults.maxForecastFrames
      assert.ok(totalFrames <= 12, `Total frames (${totalFrames}) should not exceed 12 to reduce API load`)
    })

    test('animationSpeedMs is at least 500ms', () => {
      assert.ok(defaults.animationSpeedMs >= 500, 'Animation should be at least 500ms to reduce tile requests')
    })

    test('defaultZoomLevel is reasonable (4-7, limited by RainViewer API)', () => {
      const zoom = defaults.defaultZoomLevel
      assert.ok(
        zoom >= 4 && zoom <= 7,
        `Zoom level ${zoom} should be between 4-7 (RainViewer radar tiles do not support zoom > 7)`
      )
    })

    test('updateIntervalInSeconds is at least 5 minutes', () => {
      assert.ok(defaults.updateIntervalInSeconds >= 300, 'Update interval should be at least 5 minutes (300s)')
    })
  })
})
