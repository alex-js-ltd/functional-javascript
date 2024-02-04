// Challenge 3
// Write a function numSelectString that accepts an array of numbers and returns a string. This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.
// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

export const numSelectString = (numArr: number[]) => {
	const accStart: number[] = []
	return numArr
		.reduce((acc, curr) => {
			if (curr % 2 === 1) {
				acc.push(curr)
			}
			return acc
		}, accStart)
		.sort((a, b) => a - b)
		.join(', ')
}
