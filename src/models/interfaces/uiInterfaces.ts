import { Board } from '../Board';
import { Cell } from '../Cell';
import { Player } from '../Player';

export enum Colors {
  white = 'white',
  black = 'black',
}
export interface BoardProps {
  board: Board,
  setBoard: (board: Board) => void,
  currentPlayer: Player | null,
  swapPlayer: () => void
}

export interface CellProps {
  cell: Cell,
  selected: boolean,
  click: (cell: Cell) => void
}

export enum ChessPieceName {
  ChessPiece = 'chessPiece',
  Pawn = 'pawn',
  King = 'king',
  Queen = 'queen',
  Rook = 'rook',
  Bishop = 'bishop',
  Knight = 'knight',
}
