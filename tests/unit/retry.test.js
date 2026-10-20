const assert = require('node:assert/strict')
const { test, describe } = require('node:test')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')

function loadCalculateRetryDelay() {
  const retryPath = path.join(__dirname, '../../src/frontend/Retry.ts')
  const source = fs.readFileSync(retryPath, 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022
    }
  })
  const sandbox = { exports: {} }
  vm.runInNewContext(outputText, sandbox)
  return sandbox.exports.calculateRetryDelay
}

const calculateRetryDelay = loadCalculateRetryDelay()

describe('calculateRetryDelay', () => {
  test('uses exponential backoff capped at one minute', () => {
    const delays = Array.from({ length: 8 }, (_, index) => calculateRetryDelay(index + 1, null))

    assert.deepEqual(delays, [1000, 2000, 4000, 8000, 16000, 32000, 60000, 60000])
  })

  test('waits at least the Retry-After delta-seconds value', () => {
    assert.equal(calculateRetryDelay(1, '30'), 30000)
  })

  test('waits at least the Retry-After HTTP-date value', () => {
    const now = Date.parse('2026-10-21T10:00:00Z')
    const retryAt = new Date(now + 90000).toUTCString()

    assert.equal(calculateRetryDelay(1, retryAt, now), 90000)
  })

  test('falls back to exponential backoff for invalid or elapsed dates', () => {
    const now = Date.parse('2026-10-21T10:00:00Z')

    assert.equal(calculateRetryDelay(2, 'not a date', now), 2000)
    assert.equal(calculateRetryDelay(2, 'Wed, 21 Oct 2020 10:00:00 GMT', now), 2000)
  })

  test('keeps the timer within the platform timeout limit', () => {
    assert.equal(calculateRetryDelay(1, '999999999'), 2_147_483_647)
  })
})
