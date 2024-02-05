// Challenge 2
// Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

export const promise = new Promise((res, _rej) => {
	setTimeout(() => {
		res('Resolved!')
	}, 1000)
})

// promise.then(res => console.log(res))
