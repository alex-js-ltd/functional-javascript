import { expect, test, vi } from 'vitest'
import { outer } from '../challenge_3'

test('outer', () => {
	const logSpy = vi.spyOn(global.console, 'log')

	const willCounter = outer()
	const jasCounter = outer()

	// Uncomment each of these lines one by one.
	// Before your do, guess what will be logged from each function call.

	willCounter()
	expect(logSpy).toHaveBeenCalledWith('counter', 1)
	willCounter()
	expect(logSpy).toHaveBeenCalledWith('counter', 2)
	willCounter()
	expect(logSpy).toHaveBeenCalledWith('counter', 3)

	jasCounter()
	expect(logSpy).toHaveBeenCalledWith('counter', 1)
	willCounter()
	expect(logSpy).toHaveBeenCalledWith('counter', 4)
})
