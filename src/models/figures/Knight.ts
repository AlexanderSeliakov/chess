import { Cell } from "../Cell";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName, Colors } from "../interfaces/uiInterfaces";
export class Knight extends ChessPiece {
    // black img
    black = 'assets/black-knight.png';
    // white img
    white = 'assets/white-knight.png';

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? this.black : this.white
        this.ChessPieceName = ChessPieceName.Knight
      }
      
      canMove(target: Cell): boolean {
        if(!super.canMove(target))
          return false
        
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
      }
}
