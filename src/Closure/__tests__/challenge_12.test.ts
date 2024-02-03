import { test, expect } from 'vitest'
import { blackjack } from '../challenge_12'

test('blackjack', () => {
	// /*** DEALER ***/
	const deal = blackjack([
		2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
	])

	// /*** PLAYER 1 ***/
	const i_like_to_live_dangerously = deal(4, 5)
	console.log(i_like_to_live_dangerously()) // should log: 9
	console.log(i_like_to_live_dangerously()) // should log: 11
	console.log(i_like_to_live_dangerously()) // should log: 17
	console.log(i_like_to_live_dangerously()) // should log: 18
	console.log(i_like_to_live_dangerously()) // should log: 'bust'
	console.log(i_like_to_live_dangerously()) // should log: 'you are done!'
	console.log(i_like_to_live_dangerously()) // should log: 'you are done!'
})
