// Challenge 7
// We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete

type Data = { name: string; hasPets: boolean; currentTemp: number }
export const fakePeople: Data[] = [
	{ name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
	{ name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
	{ name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i: number): Promise<Data> => {
	const returnTime = Math.floor(Math.random() * 1000)
	return new Promise((resolve, reject) => {
		if (i >= 0 && i < fakePeople.length) {
			setTimeout(() => resolve(fakePeople[i]), returnTime)
		} else {
			reject({ message: 'index out of range' })
		}
	})
}

export const getAllData = async () => {
	// CODE GOES HERE

	const accStart: Promise<Data>[] = []

	const promiseArr = fakePeople.reduce((acc, _curr, index) => {
		acc.push(fakeAPICall(index))
		return acc
	}, accStart)

	const data = await Promise.all(promiseArr)

	return { data }
}
