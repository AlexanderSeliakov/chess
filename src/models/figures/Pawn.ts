import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { ChessPiece } from "./ChessPiece";
import { ChessPieceName } from "../interfaces/uiInterfaces";
export class Pawn extends ChessPiece {
  // black img
  black = 'assets/black-pawn.png';
  // white img
  white = 'assets/white-pawn.png';

  private isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.ChessPieceLogo = color === Colors.black ? this.black : this.white
        this.ChessPieceName = ChessPieceName.Pawn
      }

      canMove(target: Cell): boolean {
        if(!super.canMove(target))
          return false

        const direction = this.cell.chessPiece?.color === Colors.black ? 1 : -1
        const firstStepDirection = this.cell.chessPiece?.color === Colors.black ? 2 : -2

        if ((target.y === this.cell.y + direction || (this.isFirstStep && (target.y === this.cell.y + firstStepDirection)))
          && target.x === this.cell.x
          && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }
      
        if(target.y === this.cell.y + direction
          && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
          && this.cell.isEnemy(target)) {
            return true;
          }
  
        return false
      }

      moveChessPiece(target: Cell): void {
        super.moveChessPiece(target)
        this.isFirstStep = false
        console.log(this.cell.chessPiece?.color, this.color);

      }
}
