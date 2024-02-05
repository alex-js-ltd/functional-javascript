// Challenge 7
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

// Challenge 7

export const delay = <Args extends unknown[]>(
	func: (...args: Args) => void,
	wait: number,
	...args: Args
) => {
	setTimeout(() => func(...args), wait)
}
