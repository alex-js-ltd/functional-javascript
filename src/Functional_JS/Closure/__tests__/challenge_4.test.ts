import { expect, test } from 'vitest'
import { addByX } from '../challenge_4'

test('addByX', () => {
	const addByTwo = addByX(2)

	expect(addByTwo(1)).toBe(3) //should return 3
	expect(addByTwo(2)).toBe(4) //should return 4
	expect(addByTwo(3)).toBe(5) //should return 5

	const addByThree = addByX(3)
	expect(addByThree(1)).toBe(4) //should return 4
	expect(addByThree(2)).toBe(5) //should return 5

	const addByFour = addByX(4)
	expect(addByFour(4)).toBe(8) //should return 8
	expect(addByFour(10)).toBe(14) //should return 14
})
