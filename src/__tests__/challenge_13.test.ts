import { expect, test } from 'vitest'
import { rating } from '../challenge_13'

test('rating', () => {
	const isEven = (n: number) => n % 2 === 0
	const greaterThanFour = (n: number) => n > 4
	const isSquare = (n: number) => Math.sqrt(n) % 1 === 0
	const hasSix = (n: number) => n.toString().includes('6')
	const checks = [isEven, greaterThanFour, isSquare, hasSix]
	expect(rating(checks, 64)).toBe(100) // should log: 100
	expect(rating(checks, 66)).toBe(75) // should log: 75
})
