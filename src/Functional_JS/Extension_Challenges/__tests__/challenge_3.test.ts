import { test, expect } from 'vitest'
import { numSelectString } from '../challenge_3'

test('numSelectString', () => {
	const nums = [17, 34, 3, 12]
	expect(numSelectString(nums)).toEqual('3, 17') // should log "3, 17"
})
