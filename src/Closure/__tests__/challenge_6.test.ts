import { expect, test, vi } from 'vitest'
import { after } from '../challenge_6'

test('after', () => {
	const logSpy = vi.spyOn(global.console, 'log')

	const called = () => console.log('hello')
	const afterCalled = after(3, called)

	afterCalled() // -> nothing is printed
	afterCalled() // -> nothing is printed
	afterCalled() // -> 'hello' is printed

	expect(logSpy).toHaveBeenCalledWith('hello')
})
