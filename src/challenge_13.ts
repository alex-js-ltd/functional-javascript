// Challenge 13
// Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.

// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

type Fn<T> = (item: T) => boolean

export const rating = <T>(arrOfFuncs: Fn<T>[], value: T) => {
	const accStart: boolean[] = []

	const output = arrOfFuncs.reduce((acc, currentFunction) => {
		const newBoolean = currentFunction(value)
		return [...acc, newBoolean]
	}, accStart)

	const trueFilter = output.filter(Boolean)

	return (trueFilter.length / output.length) * 100
}
