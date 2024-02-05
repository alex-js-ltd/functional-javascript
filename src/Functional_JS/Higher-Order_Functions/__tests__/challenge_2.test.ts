import { expect, test } from 'vitest'
import { addS } from '../challenge_2'

test('addS', () => {
	expect(addS('pizza')).toBe('pizzas')
})

test('addS', () => {
	expect(addS('bagel')).toBe('bagels')
})
