import { expect, test, vi } from 'vitest'
import { promise } from '../challenge_4'

test('challenge_4', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	await expect(promise).resolves.toBe('Promise has been resolved!')
	promise.then(res => console.log(res))
	console.log("I'm not the promise!")
	await promise

	expect(logSpy).toHaveBeenCalledWith("I'm not the promise!")
	expect(logSpy).toHaveBeenCalledWith('Promise has been resolved!')
})
