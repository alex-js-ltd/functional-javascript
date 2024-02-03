// Challenge 1
// Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!
// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]

type Fn = (input: number) => number

export const functionValidator = (
	funcArr: Fn[],
	input: number,
	output: number,
) => {
	const accStart: Fn[] = []

	return funcArr.reduce((acc, curr) => {
		if (curr(input) === output) acc.push(curr)
		return acc
	}, accStart)
}
