// Challenge 4
// Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

// …

export const promise: Promise<string> = new Promise((res, rej) => {
	res('Promise has been resolved!')
})

promise.then(res => console.log(res))
