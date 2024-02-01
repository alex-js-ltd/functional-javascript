import { expect, test } from 'vitest'
import { objFilter } from '../challenge_12'

test('objectFilter', () => {
	const startingObj: { [key: string]: number } = {}
	startingObj[6] = 3
	startingObj[2] = 1
	startingObj[12] = 4
	const half = (n: number) => n / 2

	const result = objFilter(startingObj, half)

	expect(result).toEqual({ 2: 1, 6: 3 })
})
