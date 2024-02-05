import { expect, test, vi } from 'vitest'
import { promise } from '../challenge_2'

test('promise', async () => {
	const logSpy = vi.spyOn(global.console, 'log')

	await expect(promise).resolves.toBe('Resolved!')
	await promise

	expect(logSpy).toHaveBeenCalledWith('Resolved!')
})
