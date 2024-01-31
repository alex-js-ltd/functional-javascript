import { expect, test } from 'vitest'
import { addTwo, addS, map, forEach } from './main.ts'

test('addTwo', () => {
	expect(addTwo(1)).toBe(3)
})

test('addTwo', () => {
	expect(addTwo(10)).toBe(12)
})

test('addS', () => {
	expect(addS('pizza')).toBe('pizzas')
})

test('addS', () => {
	expect(addS('bagel')).toBe('bagels')
})

test('map', () => {
	expect(map([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5])
})

test('forEach', () => {
	// See for yourself if your forEach works!
	let alphabet = ''
	const letters = ['a', 'b', 'c', 'd']
	forEach(letters, char => (alphabet += char))
	expect(alphabet).toBe('abcd')
})
