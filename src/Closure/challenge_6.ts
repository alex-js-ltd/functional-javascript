// Challenge 6
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
// const called = () => console.log('hello');
// const afterCalled = after(3, called);
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

export const after = <T>(count: number, func: () => T) => {
	let counter = 0

	return () => {
		counter++

		if (counter >= count) {
			func()
		}
	}
}
