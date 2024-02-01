import { expect, test } from 'vitest'

import { union } from '../challenge_8'

test('union', () => {
	const result = union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])
	console.log(result)
	expect(result).toStrictEqual([5, 10, 15, 88, 1, 7, 100])
})
