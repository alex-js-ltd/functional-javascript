// Challenge 10
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

export const multiMap = <T>(arrVals: T[], arrCallbacks: Function[]) => {
	const accStart: { [key: string]: T[] } = {}

	const obj = arrVals.reduce((acc, curr) => {
		acc[`${curr}`] = arrCallbacks.map(callback => callback(curr))
		return acc
	}, accStart)

	return obj
}
