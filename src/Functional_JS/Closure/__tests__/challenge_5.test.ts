import { expect, test } from 'vitest'
import { addByX } from '../challenge_4'
import { once } from '../challenge_5'

test('once', () => {
	const addByTwo = addByX(2)

	const onceFunc = once(addByTwo)

	expect(onceFunc(4)).toBe(6) //should log 6
	expect(onceFunc(10)).toBe(6) //should log 6
	expect(onceFunc(9001)).toBe(6) //should log 6
})
