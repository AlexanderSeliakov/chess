/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { CellProps } from '../models/interfaces/uiInterfaces';

const CellComponent: FC<CellProps> = ({ cell, selected, click}) =>{

  return (
    <div className={[
        'cell', 
        cell.color, 
        selected && "selected",
        (cell.available && cell.chessPiece) && 'eatable'
      ].join(' ')} 
      onClick={()=>click(cell)}
      // style={{background: cell.available && cell.chessPiece ? 'green' : ''}}
    >
     { !cell.chessPiece && cell.available && <div className='available'></div>}
      {cell.chessPiece?.ChessPieceLogo && <img src={cell.chessPiece.ChessPieceLogo} />}

    </div>
  )
};

export default CellComponent;
