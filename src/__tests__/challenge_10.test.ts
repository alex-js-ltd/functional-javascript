import { expect, test } from 'vitest'
import { multiMap } from '../challenge_10'

test('multiMap', () => {
	const myObject: { [key: string]: string[] } = multiMap(
		['catfood', 'glue', 'beer'],
		[
			(str: string) => str.toUpperCase(),
			(str: string) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
			(str: string) => str + str,
		],
	)

	expect(myObject).toEqual({
		catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
		glue: ['GLUE', 'Glue', 'glueglue'],
		beer: ['BEER', 'Beer', 'beerbeer'],
	})
})
