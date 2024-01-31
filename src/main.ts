// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!')

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
export const addTwo = (num: number) => {
	return num + 2
}

// To check if you've completed this function, uncomment these console.logs!
console.log(addTwo(3))
console.log(addTwo(10))

// Challenge 2
export const addS = (word: string) => {
	return word + 's'
}

// Uncomment these to check your work
console.log(addS('pizza'))
console.log(addS('bagel'))

// Challenge 3
const map = <T>(array: Array<T>, callback: (item: T) => T) => {
	const newArray: Array<T> = []
	for (let el of array) {
		newArray.push(callback(el))
	}

	return newArray
}

console.log(map([1, 2, 3], addTwo))

// Challenge 4
const forEach = <T>(array: Array<T>, callback: (item: T) => void) => {
	for (let el of array) {
		callback(el)
	}
}

// See for yourself if your forEach works!
let alphabet = ''
const letters = ['a', 'b', 'c', 'd']
forEach(letters, char => (alphabet += char))
console.log(alphabet)

// Challenge 5
const mapWith = <T>(array: Array<T>, callback: (item: T) => void) => {
	array.forEach(callback)
	return array
}

console.log(mapWith([1, 2, 3], addTwo))

// Challenge 6
const reduce = <T>(
	array: Array<T>,
	callback: (acc: T, value: T) => T,
	initialValue: T,
) => {
	let acc = initialValue

	for (let [, value] of array.entries()) {
		acc = callback(acc, value)
	}
	return acc
}

const nums = [4, 1, 3]
const add = (a: number, b: number) => a + b
console.log(reduce(nums, add, 0)) //-> 8

// Challenge 7
const intersection = <T>(...arrays: Array<Array<T>>): Array<T> => {
	const firstArray = arrays[0]
	const newArray: Array<T> = []

	for (let i = 0; i < firstArray.length; i++) {
		const el = firstArray[i]
		if (arrays.every(arr => arr.includes(el))) {
			newArray.push(el)
		}
	}

	return newArray
}

console.log(
	intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]),
)

// should log: [5, 15]

// Challenge 8
const union = <T>(...arrays: Array<Array<T>>): Array<T> => {
	const start = arrays[0]

	const callback = (acc: Array<T>, current: Array<T>): Array<T> => {
		const newElements = current.filter(el => !acc.includes(el))
		return [...acc, ...newElements]
	}

	return arrays.reduce(callback, start)
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]))

// should log: [5, 10, 15, 88, 1, 7, 100]
