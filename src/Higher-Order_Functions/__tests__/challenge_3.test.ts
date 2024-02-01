import { expect, test } from 'vitest'
import { addTwo } from '../challenge_1'
import { map } from '../challenge_3'

test('map', () => {
	expect(map([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5])
})
