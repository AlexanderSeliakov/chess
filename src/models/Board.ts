import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { ChessPiece } from './figures/ChessPiece';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
  /**
   * Array of all cells on the board
   */
  cells: Cell[][] = [];

  /**
   * Array of lost black Chess Pieces
   */
  lostBlack: ChessPiece[] = []

  /**
   * Array of lost white Chess Pieces
   */
  lostWhite: ChessPiece[] = []

  /**
   * Amount  of rows on the board
  */
  private rows: number = 8;

  /**
   * Amount  of columns on the board
  */
  private columns: number = 8;

  /**
   * Initialize all Cells on the board and color it
  */
  public initCells() {    
    for (let i = 0; i < this.rows; i++) {
      const row: Cell[] = [];
      for (let k = 0; k < this.columns; k++) {
        if ((i + k) % 2 !== 0) {
          // Black Cell
          row.push(new Cell(this, k, i, Colors.black, null));
        } else {
          // White Cell
          row.push(new Cell(this, k, i, Colors.white, null));
        }
      }
      this.cells.push(row);
    }
  }

  /**
   * Highlights the cells that are available for moving
   * 
   * @param selectedCell selected cell with chess piece
   */
  public highlightCells(selectedCell: Cell | null ){
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let k = 0; k < row.length; k++) {
        const target = row[k]    
        target.available = !!selectedCell?.chessPiece?.canMove(target)  
      }
    }
  }


  public getCopyBoard (): Board {
    const newBoard = new Board()
    newBoard.cells = this.cells
    return newBoard
  }

  addLostFigure(chessPiece: ChessPiece){
    if(chessPiece.color === Colors.black){
       this.lostBlack.push(chessPiece)
    }else{
       this.lostWhite.push(chessPiece)
    }
 }



  /**
   * Set cell for chess piece
   * @param x 
   * @param y 
   * @returns 
   */
  public getCell(x: number, y:number){
    return this.cells[y][x]
  }

  /**
   * Method add 8 white and 8 black pawns
   */
  private addPawns(){
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.black, this.getCell(i, 1))
      new Pawn(Colors.white,  this.getCell(i, 6))
    }
  }

  /**
   * Method adds 2 Kings
   */
  private addKings(){
    new King(Colors.black, this.getCell(4, 0))
    new King(Colors.white,  this.getCell(4, 7))
  }

  /**
   * Method adds 2 Queens
   */
  private addQueens(){
    new Queen(Colors.black, this.getCell(3, 0))
    new Queen(Colors.white,  this.getCell(3, 7))
  }

  /**
   * Method adds 4 Bishops
   */
  private addBishops(){
    new Bishop(Colors.black, this.getCell(2, 0))
    new Bishop(Colors.black, this.getCell(5, 0))
    new Bishop(Colors.white,  this.getCell(5, 7))
    new Bishop(Colors.white,  this.getCell(2, 7))
  }

  /**
   * Method adds 4 Knights
   */
  private addKnights(){
    new Knight(Colors.black, this.getCell(1, 0))
    new Knight(Colors.black, this.getCell(6, 0))
    new Knight(Colors.white,  this.getCell(1, 7))
    new Knight(Colors.white,  this.getCell(6, 7))
  }

  /**
   * Method adds 4 Rooks
   */
  private addRooks(){
    new Rook(Colors.black, this.getCell(0, 0))
    new Rook(Colors.black, this.getCell(7, 0))
    new Rook(Colors.white,  this.getCell(0, 7))
    new Rook(Colors.white,  this.getCell(7, 7))
  }

  /**
   * Classic Chess setup 
   */
  public initClassicChess (){
    this.addKings()
    this.addQueens()
    this.addBishops()
    this.addKnights()
    this.addRooks()
    this.addPawns()
    
  }

  // public initFischerChess (){
  //   this.addKings()
  //   this.addQueens()
  //   this.addBishops()
  //   this.addKnights()
  //   this.addRooks()
  //   this.addPawns()
  // }

}
