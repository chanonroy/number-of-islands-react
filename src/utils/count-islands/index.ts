export default function countIslands(grid: number[][]): number {
  let count = 0
  const localGrid = grid.map((arr) => arr.slice())

  const widthBoundary = grid.length - 1
  const heightBoundary = grid[0].length - 1

  const dfs = (dfsGrid: number[][], row: number, col: number) => {
    if (dfsGrid[row][col] === 0) {
      return
    }

    // paint that we have seen
    dfsGrid[row][col] = 0

    // recurse top
    if (row > 0) {
      dfs(dfsGrid, row - 1, col)
    }

    // recurse right
    if (row < widthBoundary) {
      dfs(dfsGrid, row + 1, col)
    }

    // recurse bottom
    if (col < heightBoundary) {
      dfs(dfsGrid, row, col + 1)
    }

    // recurse left
    if (col > 0) {
      dfs(dfsGrid, row, col - 1)
    }

    return
  }

  for (let r = 0; r <= localGrid.length - 1; r++) {
    for (let c = 0; c <= localGrid[r].length - 1; c++) {
      const cell = localGrid[r][c]

      if (cell === 1) {
        count += 1
        dfs(localGrid, r, c)
      }
    }
  }

  return count
}
