import { expect, test } from 'vitest'

import { intersection } from '../challenge_7'

test('intersection', () => {
	const result = intersection(
		[5, 10, 15, 20],
		[15, 88, 1, 5, 7],
		[1, 10, 15, 5, 20],
	)

	expect(result).toContain(5)
	expect(result).toContain(15)
})
