// Challenge 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

export const intersection = <T>(...arrays: T[][]) => {
	return arrays.reduce((acc, current) => {
		return current.filter(el => acc.includes(el))
	})
}
