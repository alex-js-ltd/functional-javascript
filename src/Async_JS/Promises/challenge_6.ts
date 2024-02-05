// Challenge 6
// This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then

const secondPromise = new Promise((res, _rej) => {
	res('Second!')
})

export const firstPromise = new Promise((res, _rej) => {
	res(secondPromise)
})

firstPromise.then(res => console.log(res))
