import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName } from "../interfaces/uiInterfaces";
export class Bishop extends ChessPiece {
  // black img
  black = 'assets/black-bishop.png';
  // white img
  white = 'assets/white-bishop.png';

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.ChessPieceLogo = color === Colors.black ? this.black : this.white
    this.ChessPieceName = ChessPieceName.Bishop
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false
    if(this.cell.isEmptyDiagonal(target))
      return true;
    return false
  }
}
