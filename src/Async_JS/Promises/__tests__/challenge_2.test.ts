import { expect, test, vi, beforeEach, afterEach } from 'vitest'
import { promise } from '../challenge_2'

beforeEach(() => {
	vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
	vi.runOnlyPendingTimers()
	vi.useRealTimers()
})

test('promise', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	await expect(promise).resolves.toBe('Resolved!')

	vi.advanceTimersByTime(1000)

	expect(logSpy).toHaveBeenCalledWith('Resolved!')
})
