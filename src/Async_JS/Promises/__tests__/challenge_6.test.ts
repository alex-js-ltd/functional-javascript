import { expect, test } from 'vitest'
import { firstPromise } from '../challenge_6'

test('firstPromise', async () => {
	await expect(firstPromise).resolves.toBe('Second!')
})
