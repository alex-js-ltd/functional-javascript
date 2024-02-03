import { test, expect } from 'vitest'
import { average } from '../challenge_9'

test('average', () => {
	const avgSoFar = average()
	expect(avgSoFar()).toBe(0) // should log: 0
	expect(avgSoFar(4)).toBe(4) // should log: 4
	expect(avgSoFar(8)).toBe(6) // should log: 6
	expect(avgSoFar()).toBe(6) // should log: 6
	expect(avgSoFar(12)).toBe(8) // should log: 8
	expect(avgSoFar()).toBe(8) // should log: 8
})
