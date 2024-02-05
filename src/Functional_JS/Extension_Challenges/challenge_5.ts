// Challenge 5
// Create a function curriedAddThreeNums that adds three numbers together when run thrice in succession as follows:
// expect(curriedAddThreeNums(3)(-1)(1)).toEqual(3) // should log 3

export const curriedAddThreeNums = (num1: number) => {
	return (num2: number) => {
		return (num3: number) => {
			return num1 + num2 + num3
		}
	}
}
