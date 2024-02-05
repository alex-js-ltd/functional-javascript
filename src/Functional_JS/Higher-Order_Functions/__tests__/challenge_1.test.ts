import { expect, test } from 'vitest'
import { addTwo } from '../challenge_1'

test('addTwo', () => {
	expect(addTwo(1)).toBe(3)
})

test('addTwo', () => {
	expect(addTwo(10)).toBe(12)
})
