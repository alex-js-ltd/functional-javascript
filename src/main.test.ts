import { expect, test } from 'vitest'
import {
	addTwo,
	addS,
	map,
	forEach,
	mapWith,
	reduce,
	intersection,
	union,
} from './main.ts'

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

test('mapWith', () => {
	expect(mapWith([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5])
})

test('reduce', () => {
	const nums = [4, 1, 3]
	const add = (a: number, b: number) => a + b

	expect(reduce(nums, add, 0)).toBe(8)
})

test('intersection', () => {
	expect(
		intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]),
	).toStrictEqual([5, 15])
})

test('union', () => {
	expect(
		union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]),
	).toStrictEqual([5, 10, 15, 88, 1, 7, 100])
})
