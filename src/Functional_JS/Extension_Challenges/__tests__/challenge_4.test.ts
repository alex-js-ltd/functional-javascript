import { test, expect } from 'vitest'
import { movieSelector } from '../challenge_4'

test('movieSelector', () => {
	const movies: { id: number; title: string; score: number }[] = [
		{ id: 1, title: "Pan's Labyrinth", score: 9 },
		{ id: 37, title: 'Manos: The Hands of Fate', score: 2 },
		{ id: 28, title: 'Air Bud', score: 5 },
		{ id: 40, title: 'Hackers', score: 7 },
	]
	expect(movieSelector(movies)).toEqual(["PAN'S LABYRINTH", 'HACKERS']) // should log [ "PAN'S LABYRINTH", "HACKERS" ]
})
