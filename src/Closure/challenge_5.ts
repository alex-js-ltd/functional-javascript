// Challenge 5
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

export const once = <T>(func: (item: T) => T) => {
	let counter = 0

	let result: T

	return (input: T) => {
		if (counter > 0) return result

		result = func(input)

		counter++

		return result
	}
}
