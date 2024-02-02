import { expect, test, vi, beforeEach, afterEach } from 'vitest'
import { delay } from '../challenge_7'

beforeEach(() => {
	vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
	vi.runOnlyPendingTimers()
	vi.useRealTimers()
})

test('after', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	const called = () => console.log('hello')

	delay(called, 5000)

	vi.advanceTimersByTime(5000)

	expect(logSpy).toHaveBeenCalledWith('hello')
})
