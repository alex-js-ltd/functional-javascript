import { expect, test } from 'vitest'
import { addTwo, addS } from './main.ts'

test('addTwo', () => {
	expect(addTwo(1)).toBe(3)
})

test('addS', () => {
	expect(addS('pizza')).toBe('pizzas')
})

test('addS', () => {
	expect(addS('bagel')).toBe('bagels')
})
