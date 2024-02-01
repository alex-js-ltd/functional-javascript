// Challenge 14
// Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.

// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

type Fn<T> = (item: T) => T

export const pipe = <T>(arrOfFuncs: Fn<T>[], value: T) => {
	const accStart = value

	const output = arrOfFuncs.reduce((acc, currentFunction) => {
		return currentFunction(acc)
	}, accStart)

	return output
}
