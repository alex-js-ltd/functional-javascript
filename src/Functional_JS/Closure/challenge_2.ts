// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
// const printSample = createFunctionPrinter('sample');
// const printHello = createFunctionPrinter('hello')
// // now we'll call the functions we just created
// printSample(); //should console.log('sample');
// printHello(); //should console.log('hello');

export const createFunctionPrinter = (input: string) => {
	return () => {
		console.log(input)
	}
}
