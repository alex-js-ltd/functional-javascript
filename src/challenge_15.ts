// Challenge 15
// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.

// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

export const highestFunc = <T>(
	objOfFuncs: { [key: string]: (n: T) => T },
	subject: T,
) => {
	const keys = Object.keys(objOfFuncs)

	const accStart = keys[0]

	const output = keys.reduce((acc, curr) => {
		const nextValue = objOfFuncs[curr](subject)

		const accValue = objOfFuncs[acc](subject)

		return nextValue > accValue ? curr : acc
	}, accStart)

	return output
}
