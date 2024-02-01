// Challenge 5
// For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

export const mapWith = <T>(array: T[], callback: (item: T) => T) => {
	const mappedArray: T[] = []

	array.forEach(el => mappedArray.push(callback(el)))
	return mappedArray
}
