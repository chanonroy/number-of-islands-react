import countIslands from '.'

describe('Count Islands', () => {
  test('returns expected values', () => {
    expect(
      countIslands([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toBe(1)

    expect(
      countIslands([
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1],
      ])
    ).toBe(2)

    expect(
      countIslands([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toBe(0)
  })
  test('should not alter the grid input in-place', () => {
    const grid = [[0, 1, 0]]

    expect(countIslands(grid)).toBe(1)
    expect(grid).toEqual([[0, 1, 0]])
  })
})
