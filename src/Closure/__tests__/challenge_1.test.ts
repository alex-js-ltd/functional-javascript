import { expect, test, vi } from 'vitest'
import { createFunction } from '../challenge_1'

test('createFunction', () => {
	const logSpy = vi.spyOn(global.console, 'log')

	const function1 = createFunction()
	// now we'll call the function we just created
	function1() //should console.log('hello');

	expect(logSpy).toHaveBeenCalledWith('hello')
})
