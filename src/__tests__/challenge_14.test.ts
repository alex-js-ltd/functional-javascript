import { expect, test } from 'vitest'
import { pipe } from '../challenge_14'

test('pipe', () => {
	const capitalize = (str: string) => str.toUpperCase()
	const addLowerCase = (str: string) => str + str.toLowerCase()
	const repeat = (str: string) => str + str
	const capAddlowRepeat = [capitalize, addLowerCase, repeat]
	expect(pipe(capAddlowRepeat, 'cat')).toEqual('CATcatCATcat')
})
