import { expect, test } from 'vitest'
import { addTwo } from '../challenge_1'
import { mapWith } from '../challenge_5'

test('mapWith', () => {
	expect(mapWith([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5])
})
