import {
   Board
} from './Board';
import {
   Colors
} from './Colors';
import {
   ChessPiece
} from './figures/ChessPiece';

export class Cell {
   /**
    * Board
    */
   board: Board;

   /**
    * X coordinate of Cell
    */
   readonly x: number;

   /**
    * Y coordinate of Cell
    */
   readonly y: number;

   /**
    * Color of Cell
    */
   readonly color: Colors;

   /**
    * Chess Piece places on the Cell
    */
   chessPiece: ChessPiece | null;

   /**
    * Flag if this Cell available for selected figure
    */
   available: boolean;

   /**
    * Key
    */
   id: number;

   constructor(
      board: Board,
      x: number,
      y: number,
      color: Colors,
      chessPiece: ChessPiece | null,
   ) {
      this.board = board;
      this.x = x;
      this.y = y;
      this.color = color;
      this.chessPiece = chessPiece;
      this.available = false;
      this.id = Math.random();
   }


   isEmpty(){
      console.log(this.chessPiece, 'this.chessPiece, isEmpty');
      console.log(this.board.getCell(this.x, this.y), 'this.board.getCell(this.x, y)');
      return this.chessPiece === null
   }

   /**
    * Method check if cell contains enemy chessPiece
    * @param target target cell
    * @returns 
    */
   isEnemy(target: Cell): boolean {
      if(target.chessPiece){
         return this.chessPiece?.color !== target.chessPiece.color
      }
      return false
   }

   /**
    * Check how many available cells for next move
    * @param target target cell
    */
   isEmptyVertical(target: Cell): boolean {
      if(this.x !== target.x) {return false}

      const min = Math.min(this.y, target.y)
      const max = Math.max(this.y, target.y)

      for (let y = min+1; y < max; y++) {
         if(!this.board.getCell(this.x, y).isEmpty()){
            return false
         }
      }
      return true
   }

   isEmptyHorizontal(target: Cell): boolean { 
      if(this.y !== target.y) {return false}

      const min = Math.min(this.x, target.x)
      const max = Math.max(this.x, target.x)

      for (let x = min+1; x < max; x++) {
         if(!this.board.getCell(x, this.y).isEmpty()){
            return false
         }
      }
      return true
   }

   isEmptyDiagonal(target: Cell): boolean {
      const diagX = Math.abs(target.x - this.x)
      const diagY = Math.abs(target.y - this.y)

      if(diagX !== diagY) return false

      const dy = this.y < target.y ? 1 : -1
      const dx = this.x < target.x ? 1 : -1

      for (let i = 1; i < diagY; i++) {
         if(!this.board.getCell(this.x + dx * i,  this.y + dy * i).isEmpty())
            return false
      }

      return true

   }

   // Loop dependency!! cell <-> chessPiece
   setChessPiece(chessPiece: ChessPiece){
      this.chessPiece = chessPiece
      this.chessPiece.cell = this
   }


   moveChessPiece(target: Cell) {
      if (this.chessPiece?.canMove(target)) {
         this.chessPiece.moveChessPiece(target)
         if(target.chessPiece){
            this.board.addLostFigure(target.chessPiece)
         }
         target.setChessPiece(this.chessPiece)
         this.chessPiece = null
      }
   }
}