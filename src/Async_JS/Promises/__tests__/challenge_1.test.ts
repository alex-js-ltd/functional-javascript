import { expect, test, vi, beforeEach, afterEach } from 'vitest'
import { sayHello } from '../challenge_1'

beforeEach(() => {
	vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
	vi.runOnlyPendingTimers()
	vi.useRealTimers()
})

test('sayHello', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	sayHello()

	vi.advanceTimersByTime(1000)

	expect(logSpy).toHaveBeenCalledWith('Hello!')
})
