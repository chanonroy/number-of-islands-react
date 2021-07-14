import React, { useState } from 'react'
import Board from './components/board'
import Container from './components/container'
import countIslands from './utils/count-islands'

export default function App() {
  const [islandState, setIslandState] = useState<{
    board: number[][]
    count: number
  }>({
    board: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    count: 0,
  })

  const { board, count } = islandState

  const handleBoardUpdate = async (newBoard: number[][]) => {
    setIslandState({
      board: newBoard,
      count: countIslands(newBoard),
    })
  }

  return (
    <Container style={{ paddingTop: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <Board board={board} onClick={handleBoardUpdate} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', color: 'white' }}
      >
        {count === 1
          ? `There is ${count} island`
          : `There are ${count} islands`}
      </div>
    </Container>
  )
}
