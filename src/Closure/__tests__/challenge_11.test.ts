import { test, expect } from 'vitest'
import { makeHistory } from '../challenge_11'

test('makeHistory', () => {
	const myActions = makeHistory(2)
	expect(myActions('jump')).toEqual('jump done') // should log: 'jump done'
	expect(myActions('undo')).toEqual('jump undone') // should log: 'jump undone'
	expect(myActions('walk')).toEqual('walk done') // should log: 'walk done'
	expect(myActions('code')).toEqual('code done') // should log: 'code done'
	expect(myActions('pose')).toEqual('pose done') // should log: 'pose done'
	expect(myActions('undo')).toEqual('pose undone') // should log: 'pose undone'
	expect(myActions('undo')).toEqual('code undone') // should log: 'code undone'
	expect(myActions('undo')).toEqual('nothing to undo') // should log: 'nothing to undo'
})
