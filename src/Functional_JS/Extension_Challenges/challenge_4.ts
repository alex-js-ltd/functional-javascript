// Challenge 4
// Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. The titles should be all uppercase strings.
// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

export const movieSelector = (
	moviesArr: { id: number; title: string; score: number }[],
) => {
	const accStart: string[] = []

	return moviesArr.reduce((acc, curr) => {
		if (curr.score > 5) acc.push(curr.title.toUpperCase())
		return acc
	}, accStart)
}
