import { test, expect } from 'vitest'
import { blackjack } from '../challenge_12'

test('blackjack', () => {
	// /*** DEALER ***/
	const deal = blackjack([
		2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
	])

	// /*** PLAYER 1 ***/
	const i_like_to_live_dangerously = deal(4, 5)
	expect(i_like_to_live_dangerously()).toEqual(9) // should log: 9
	expect(i_like_to_live_dangerously()).toEqual(11) // should log: 11
	expect(i_like_to_live_dangerously()).toEqual(17) // should log: 17
	expect(i_like_to_live_dangerously()).toEqual(18) // should log: 18
	expect(i_like_to_live_dangerously()).toEqual('bust') // should log: 'bust'
	expect(i_like_to_live_dangerously()).toEqual('you are done!') // should log: 'you are done!'
	expect(i_like_to_live_dangerously()).toEqual('you are done!') // should log: 'you are done!'
})
