import { test, expect } from 'vitest'
import { allClear } from '../challenge_2'

test('allClear', () => {
	const isOdd = (num: number) => num % 2 === 1
	const isPositive = (num: number) => num > 0
	const multipleOfFive = (num: number) => num % 5 === 0
	const numFnArr = [isOdd, isPositive, multipleOfFive]
	expect(allClear(numFnArr, 25)).toBe(true) // should log true
	expect(allClear(numFnArr, -25)).toBe(false) // should log false
})
