// Challenge 5
// Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

export const delay = async () => {
	return new Promise((res, _rej) => {
		setTimeout(() => {
			res('Resolved!')
		}, 1000)
	})
}
