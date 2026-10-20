const INITIAL_RETRY_DELAY_MS = 1000
const MAX_EXPONENTIAL_RETRY_DELAY_MS = 60_000
const MAX_TIMEOUT_DELAY_MS = 2_147_483_647

export function calculateRetryDelay(retryCount: number, retryAfter: string | null, now = Date.now()): number {
  const attempt = Number.isFinite(retryCount) ? Math.max(1, Math.floor(retryCount)) : 1
  const exponent = Math.min(attempt - 1, 6)
  const exponentialDelay = Math.min(INITIAL_RETRY_DELAY_MS * 2 ** exponent, MAX_EXPONENTIAL_RETRY_DELAY_MS)
  const retryAfterValue = retryAfter?.trim() || ''
  let retryAfterDelay = 0

  if (/^\d+$/.test(retryAfterValue)) {
    retryAfterDelay = Math.min(Number(retryAfterValue) * 1000, MAX_TIMEOUT_DELAY_MS)
  } else if (retryAfterValue) {
    const retryAt = Date.parse(retryAfterValue)
    if (Number.isFinite(retryAt)) {
      retryAfterDelay = Math.max(0, retryAt - now)
    }
  }

  return Math.min(Math.max(exponentialDelay, retryAfterDelay), MAX_TIMEOUT_DELAY_MS)
}
