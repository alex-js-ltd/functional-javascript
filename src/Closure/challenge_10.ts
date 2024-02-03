// Challenge 10
// Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
// const capLastTestCases = [['hello', 'hellO'], ['goodbye', 'goodbyE'], ['howdy', 'howdY']];
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true

export const makeFuncTester = (arrOfTests: string[][]) => {
	return (callback: (str: string) => string): boolean => {
		const output = arrOfTests.reduce((_acc, curr) => {
			return callback(curr[0]) === curr[1] ? true : false
		}, true)

		return output
	}
}
