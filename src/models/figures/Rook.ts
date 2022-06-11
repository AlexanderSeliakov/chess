import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName } from "../interfaces/uiInterfaces";

import black from '../../assets/black-rook.png';
import white from '../../assets/white-rook.png';

export class Rook extends ChessPiece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? black : white
        this.ChessPieceName = ChessPieceName.Rook
      }

      canMove(target: Cell): boolean {
        if(!super.canMove(target))
          return false
        if(this.cell.isEmptyVertical(target))
          return true;
        if(this.cell.isEmptyHorizontal(target))
          return true;
        return false
      }
}
