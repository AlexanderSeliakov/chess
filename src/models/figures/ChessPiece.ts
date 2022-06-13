import logo from '../../assets/black-king.png';
import { Cell } from '../Cell';
import { ChessPieceName, Colors } from '../interfaces/uiInterfaces';

export class ChessPiece {
  color: Colors;

  cell: Cell;

  ChessPieceLogo: typeof logo | null;

  ChessPieceName: ChessPieceName;

  id: number;

  constructor(
    color: Colors,
    cell: Cell,
  ) {
    this.color = color;
    this.cell = cell;
    this.cell.chessPiece = this;
    this.ChessPieceLogo = null;
    this.ChessPieceName = ChessPieceName.ChessPiece;
    this.id = Math.random();
  }

  /**
   * Define where chess piece can go
   * @param target clicked cell
   * @returns  true or false
   */
  canMove(target: Cell): boolean {
    //  Can't eat same color chessPiece
    if(target.chessPiece?.color === this.color){
      return false
    }
    // Can't eat the King
    if(target.chessPiece?.ChessPieceName === ChessPieceName.King){
      return false
    }
    return true
  }

  // TODO: should I make it abstract??
  moveChessPiece(target: Cell): void {
  }
}
