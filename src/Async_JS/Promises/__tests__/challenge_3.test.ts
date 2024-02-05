import { expect, test, vi } from 'vitest'
import { promise } from '../challenge_3'

test('promise', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	expect(promise).rejects.toBe('Rejected!')

	promise.catch(err => {
		console.log(err)
		expect(logSpy).toHaveBeenCalledWith('Rejected!')
	})
})
