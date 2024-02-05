import { test, expect } from 'vitest'
import { makeFuncTester } from '../challenge_10'

test('average', () => {
	const capLastTestCases = [
		['hello', 'hellO'],
		['goodbye', 'goodbyE'],
		['howdy', 'howdY'],
	]
	const shouldCapitalizeLast = makeFuncTester(capLastTestCases)
	const capLastAttempt1 = (str: string) => str.toUpperCase()
	const capLastAttempt2 = (str: string) =>
		str.slice(0, -1) + str.slice(-1).toUpperCase()
	expect(shouldCapitalizeLast(capLastAttempt1)).toBe(false) // should log: false
	expect(shouldCapitalizeLast(capLastAttempt2)).toBe(true) // should log: true
})
