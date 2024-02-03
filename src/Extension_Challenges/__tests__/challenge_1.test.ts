import { test, expect } from 'vitest'
import { functionValidator } from '../challenge_1'

test('functionValidator', () => {
	const addFive = (num: number) => num + 5
	const multiplyByTwo = (num: number) => num * 2
	const subtractOne = (num: number) => num - 1
	const fnArr = [addFive, multiplyByTwo, subtractOne]

	expect(functionValidator(fnArr, 5, 10)).toStrictEqual([
		addFive,
		multiplyByTwo,
	])
})
