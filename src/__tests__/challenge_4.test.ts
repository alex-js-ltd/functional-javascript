import { expect, test } from 'vitest'
import { forEach } from '../challenge_4'

test('forEach', () => {
	// See for yourself if your forEach works!
	let alphabet = ''
	const letters = ['a', 'b', 'c', 'd']
	forEach(letters, char => (alphabet += char))
	expect(alphabet).toBe('abcd')
})
