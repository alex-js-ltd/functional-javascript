// Challenge 5
// Create a function curriedAddThreeNums that adds three numbers together when run thrice in succession as follows:
// curriedAddThreeNums(1)(3)(7) //should return 10

export const curriedAddThreeNums = (num1: number) => {
	return (num2: number) => {
		return (num3: number) => {
			return num1 + num2 + num3
		}
	}
}

console.log(curriedAddThreeNums(3)(-1)(1)) // should log 3

console.log(curriedAddThreeNums(2)(3)(5)) // should log 3
