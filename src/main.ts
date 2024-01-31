// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!')

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
export const addTwo = (num: number) => {
	return num + 2
}

// Challenge 2
export const addS = (word: string) => {
	return word + 's'
}

// Challenge 3
export const map = <T>(array: Array<T>, callback: (item: T) => T) => {
	const mappedArray = []
	for (let el of array) {
		mappedArray.push(callback(el))
	}

	return mappedArray
}

// Challenge 4
export const forEach = <T>(array: Array<T>, callback: (item: T) => void) => {
	for (let el of array) {
		callback(el)
	}
}

// Challenge 5
export const mapWith = <T>(array: Array<T>, callback: (item: T) => T) => {
	const mappedArray: Array<T> = []
	forEach(array, el => mappedArray.push(callback(el)))
	return mappedArray
}

// Challenge 6
export const reduce = <T>(
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

// Challenge 7
// export const intersection = <T>(...arrays: Array<Array<T>>): Array<T> => {
// 	const firstArray = arrays[0]
// 	const newArray: Array<T> = []

// 	for (let i = 0; i < firstArray.length; i++) {
// 		const el = firstArray[i]
// 		if (arrays.every(arr => arr.includes(el))) {
// 			newArray.push(el)
// 		}
// 	}

// 	return newArray
// }

export const intersection = <T>(...arrays: T[][]): T[] => {
	const reducer = (acc: T[], curr: T[]) => {
		return curr.filter(el => acc.includes(el))
	}

	return arrays.reduce(reducer)
}

// Challenge 8
export const union = <T>(...arrays: T[][]): T[] => {
	const reducer = (acc: T[], current: T[]): T[] => {
		const newElements = current.filter(el => !acc.includes(el))
		return [...acc, ...newElements]
	}

	return arrays.reduce(reducer)
}
