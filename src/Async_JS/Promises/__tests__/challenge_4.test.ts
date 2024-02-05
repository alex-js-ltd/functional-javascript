import { expect, test, vi } from 'vitest'
import { promise } from '../challenge_4'

test('challenge_4', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	let array: string[] = []

	await expect(promise).resolves.toBe('Promise has been resolved!')
	promise.then(res => array.push(res))
	array.push("I'm not the promise!")
	await promise
	array.forEach(el => console.log(el))
	expect(logSpy).toHaveBeenCalledWith("I'm not the promise!")
	expect(logSpy).toHaveBeenCalledWith('Promise has been resolved!')
})
