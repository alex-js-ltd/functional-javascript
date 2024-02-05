import { test, expect } from 'vitest'
import { curriedAddThreeNums } from '../challenge_5'

test('curriedAddThreeNums', () => {
	expect(curriedAddThreeNums(3)(-1)(1)).toEqual(3) // should log 3
	expect(curriedAddThreeNums(2)(3)(5)).toEqual(10) // should log 10
})
