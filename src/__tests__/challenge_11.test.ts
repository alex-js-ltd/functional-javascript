import { expect, test } from 'vitest'
import { commutative } from '../challenge_11'

test('commutative', () => {
	const multBy3 = (n: number) => n * 3
	const divBy4 = (n: number) => n / 4
	const subtract5 = (n: number) => n - 5
	expect(commutative(multBy3, divBy4, 11)).toBe(true)
	expect(commutative(multBy3, subtract5, 10)).toBe(false)
	expect(commutative(divBy4, subtract5, 48)).toBe(false)
})
