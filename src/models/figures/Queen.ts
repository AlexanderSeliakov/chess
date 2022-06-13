import { Cell } from "../Cell";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName, Colors } from "../interfaces/uiInterfaces";
export class Queen extends ChessPiece {
    // black img
    black = 'assets/black-queen.png';
    // white img
    white = 'assets/white-queen.png';

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? this.black : this.white
        this.ChessPieceName = ChessPieceName.Queen
      }

      canMove(target: Cell): boolean {
        if(!super.canMove(target))
        return false;
        if(this.cell.isEmptyVertical(target))
          return true;
        if(this.cell.isEmptyHorizontal(target))
          return true;
        if(this.cell.isEmptyDiagonal(target))
          return true;
        return false
      }
}
