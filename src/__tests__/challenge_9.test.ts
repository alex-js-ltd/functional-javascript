import { expect, test } from 'vitest'
import { objOfMatches } from '../challenge_9'

test('objOfMatches', () => {
	const myObject: { [key: string]: string } = objOfMatches(
		['hi', 'howdy', 'bye', 'later', 'hello'],
		['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
		(str: string) => str.toUpperCase(),
	)

	expect(myObject).toEqual({ hi: 'HI', bye: 'BYE', later: 'LATER' })
})
