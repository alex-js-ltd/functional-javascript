import { expect, test } from 'vitest'
import { delay } from '../challenge_5'

test('delay', async () => {
	await expect(delay()).resolves.toBe('Resolved!')

	const res = await delay()

	expect(res).toEqual('Resolved!')
})
