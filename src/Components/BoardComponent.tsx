import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { Cell } from '../models/Cell';
import { BoardProps } from '../models/interfaces/uiInterfaces';
import CellComponent from './CellComponent';

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
 
  const clickCellHandler = (cell: Cell) => {    
    if(selectedCell && selectedCell !== cell && selectedCell?.chessPiece?.canMove(cell)){
      selectedCell.moveChessPiece(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if(cell.chessPiece?.color === currentPlayer?.color)
        setSelectedCell(cell)
    }
  }

  useEffect(()=>{
    highlightCell()
  }, [selectedCell])


  const highlightCell = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (

    <div>
      <h3> Current Player: {currentPlayer?.color} </h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map(((cell) => (
              <CellComponent  
              click={clickCellHandler}
              key={cell.id} 
              cell={cell} 
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
              )))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default BoardComponent;
