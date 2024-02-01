// Challenge 12
// Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

export const objFilter = (
	obj: { [key: string]: number },
	callback: Function,
) => {
	const keys = Object.keys(obj)

	const accStart: { [key: string]: number } = {}

	const output = keys.reduce((acc, curr) => {
		if (callback(curr) === obj[curr]) {
			acc[curr] = obj[curr]
		}
		return acc
	}, accStart)

	return output
}
