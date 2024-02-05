import { expect, test, vi } from 'vitest'
import { delay } from '../challenge_5'

test('delay', async () => {
	await expect(delay()).resolves.toBe('Resolved!')
	const logSpy = vi.spyOn(global.console, 'log')
	const res = await delay()
	console.log(res)
	expect(logSpy).toHaveBeenCalledWith('Resolved!')
})
