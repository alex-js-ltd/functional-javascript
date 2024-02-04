// Challenge 2
// Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true
// console.log(allClear(numFnArr, -25)) // should log false

export type Fn = (n: number) => boolean

export const allClear = (funcArr: Fn[], value: number) => {
	return funcArr.reduce((acc, curr) => {
		if (acc) return curr(value)
		return acc
	}, true)
}
