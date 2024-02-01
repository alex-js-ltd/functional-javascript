import { expect, test, vi } from 'vitest'
import { createFunctionPrinter } from '../challenge_2'

test('createFunction', () => {
	const logSpy = vi.spyOn(global.console, 'log')

	const printSample = createFunctionPrinter('sample')
	const printHello = createFunctionPrinter('hello')

	printSample()
	expect(logSpy).toHaveBeenCalledWith('sample') //should console.log('sample');
	printHello()
	expect(logSpy).toHaveBeenCalledWith('hello') //should console.log('hello');
})
