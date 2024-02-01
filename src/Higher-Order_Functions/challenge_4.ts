// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, char => alphabet += char);
// console.log(alphabet);   //prints 'abcd'

export const forEach = <T>(array: T[], callback: (item: T) => void) => {
	for (let el of array) {
		callback(el)
	}
}
