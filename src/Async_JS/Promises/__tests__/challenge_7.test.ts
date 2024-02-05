import { expect, test } from 'vitest'
import { getAllData, fakePeople } from '../challenge_7'

test('getAllData', async () => {
	const { data } = await getAllData()

	expect(data).toEqual(fakePeople)
})
