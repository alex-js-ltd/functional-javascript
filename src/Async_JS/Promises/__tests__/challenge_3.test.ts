import { expect, test } from 'vitest'
import { promise } from '../challenge_3'

test('promise', async () => {
	await expect(promise).rejects.toBe('Rejected!')
})
