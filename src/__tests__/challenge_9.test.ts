import { expect, test } from 'vitest'

import { objOfMatches } from '../challenge_9'

test('objOfMatches', () => {
	const myObject: { [key: string]: string } = objOfMatches(
		['hi', 'howdy', 'bye', 'later', 'hello'],
		['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
		(str: string) => str.toUpperCase(),
	)

	expect(myObject).toHaveProperty('hi')
	expect(myObject).toHaveProperty('bye')
	expect(myObject).toHaveProperty('later')

	// Check if the values are correct
	expect(myObject.hi).toBe('HI')
	expect(myObject.bye).toBe('BYE')
	expect(myObject.later).toBe('LATER')
})
