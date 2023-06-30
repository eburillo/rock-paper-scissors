import { describe, expect, it } from 'vitest'

import { getWinner } from './utils'

describe('get winner', () => {
  it('should get a draw', () => {
    expect(getWinner('rock', 'rock')).toBe(0)
  })
  it('should get a win', () => {
    expect(getWinner('rock', 'scissors')).toBe(1)
  })
  it('should get a lost', () => {
    expect(getWinner('rock', 'paper')).toBe(-1)
  })
})
