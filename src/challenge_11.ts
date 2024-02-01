// Challenge 11
// Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).

// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

type Fn = (n: number) => number

export const commutative = (func1: Fn, func2: Fn, value: number) => {
	const functionsArray = [func1, func2]
	const accStart = value

	const result = functionsArray.reduce((acc, currentFunction) => {
		return currentFunction(acc)
	}, accStart)

	const resultReversed = functionsArray.reduceRight((acc, currentFunction) => {
		return currentFunction(acc)
	}, accStart)

	console.log('result:', result, 'result reversed:', resultReversed)

	return result === resultReversed
}
