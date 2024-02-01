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

	expect(myObject).toHaveProperty('catfood')
	expect(myObject).toHaveProperty('glue')
	expect(myObject).toHaveProperty('beer')

	// Check if the values for each key are arrays
	expect(Array.isArray(myObject.catfood)).toBe(true)
	expect(Array.isArray(myObject.glue)).toBe(true)
	expect(Array.isArray(myObject.beer)).toBe(true)

	// Check if the values inside the arrays are correct
	expect(myObject.catfood).toEqual(['CATFOOD', 'Catfood', 'catfoodcatfood'])
	expect(myObject.glue).toEqual(['GLUE', 'Glue', 'glueglue'])
	expect(myObject.beer).toEqual(['BEER', 'Beer', 'beerbeer'])
})
