// Challenge 3
// Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch

export const promise = new Promise((_res, rej) => {
	rej('Rejected!')
})

promise.catch(err => console.log(err))

//export const promise = Promise.reject('Rejected!')
