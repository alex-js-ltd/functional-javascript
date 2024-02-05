// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
// const function1 = createFunction();
// // now we'll call the function we just created
// function1(); //should console.log('hello');

export const createFunction = () => {
	return () => {
		console.log('hello')
	}
}
