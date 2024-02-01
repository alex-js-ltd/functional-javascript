import { expect, test } from 'vitest'
import { highestFunc } from '../challenge_15'

test('highestFunc', () => {
	const groupOfFuncs: { [key: string]: (n: number) => number } = {}
	groupOfFuncs.double = n => n * 2
	groupOfFuncs.addTen = n => n + 10
	groupOfFuncs.inverse = n => n * -1
	expect(highestFunc(groupOfFuncs, 5)).toEqual('addTen') // should log: 'addTen'
	expect(highestFunc(groupOfFuncs, 11)).toEqual('double') // should log: 'double'
	expect(highestFunc(groupOfFuncs, -20)).toEqual('inverse') // should log: 'inverse'
})
