import { expect, test } from 'vitest'
import { russianRoulette } from '../challenge_8'

test('russianRoulette', () => {
	const play = russianRoulette(3)
	expect(play()).toEqual('click') // should log: 'click'
	expect(play()).toEqual('click') // should log: 'click'
	expect(play()).toEqual('bang') // should log: 'bang'
	expect(play()).toEqual('reload to play again') // should log: 'reload to play again'
	expect(play()).toEqual('reload to play again') // should log: 'reload to play again'
})
