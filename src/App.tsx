import React, { useState } from 'react'
import Board from './components/board'
import Container from './components/container'
import countIslands from './utils/count-islands'

export default function App() {
  const [islandState, setIslandState] = useState<{
    board: number[][]
    islands: number
  }>({
    board: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    islands: 0,
  })

  const { board, islands } = islandState

  const handleBoardUpdate = async (
    row: number,
    col: number,
    newValue: number
  ) => {
    // deep copy matrix
    const newBoard = board.map((arr) => arr.slice())
    newBoard[row][col] = newValue

    setIslandState({
      board: newBoard,
      islands: countIslands(newBoard),
    })
  }

  return (
    <Container>
      <Board board={board} onClick={handleBoardUpdate} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>{islands}</div>
    </Container>
  )
}
