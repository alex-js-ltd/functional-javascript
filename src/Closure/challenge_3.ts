// Challenge 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing

export const outer = () => {
	let counter = 0 // this variable is outside incrementCounter's scope

	return () => {
		counter++
		console.log('counter', counter)
	}
}

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();
