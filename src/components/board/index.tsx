import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
`

const StyledColumn = styled.div<{ isIsland: boolean }>`
  background-color: ${({ isIsland }) => (isIsland ? 'white' : '#45aaf2')};
  height: 100px;
  width: 100px;
  margin: 5px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid lightgrey;
  }
`

export default function Board({
  board,
  onClick,
}: {
  board: number[][]
  onClick: (row: number, col: number, newValue: number) => void
}) {
  return (
    <>
      {board.map((row, rowIdx) => {
        return (
          <StyledRow key={rowIdx} style={{ display: 'flex' }}>
            {row.map((col, colIdx) => {
              const isIsland = col === 1
              return (
                <StyledColumn
                  key={colIdx}
                  isIsland={isIsland}
                  onClick={() => onClick(rowIdx, colIdx, isIsland ? 0 : 1)}
                />
              )
            })}
          </StyledRow>
        )
      })}
    </>
  )
}
