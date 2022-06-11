import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName } from "../interfaces/uiInterfaces";

import black from '../../assets/black-bishop.png';
import white from '../../assets/white-bishop.png';

export class Bishop extends ChessPiece {

      constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? black : white
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
