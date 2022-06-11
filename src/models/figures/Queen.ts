import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName } from "../interfaces/uiInterfaces";

import black from '../../assets/black-queen.png';
import white from '../../assets/white-queen.png';

export class Queen extends ChessPiece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? black : white
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
