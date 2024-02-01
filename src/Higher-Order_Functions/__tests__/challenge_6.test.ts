import { expect, test } from 'vitest'
import { reduce } from '../challenge_6'

test('reduce', () => {
	const nums = [4, 1, 3]
	const add = (a: number, b: number) => a + b

	expect(reduce(nums, add, 0)).toBe(8)
})
