import React, { useEffect, useState } from 'react';

import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/interfaces/uiInterfaces';
import BoardComponent from './Components/BoardComponent';

import './App.css';

function App() {
  const [board, setBoard] = useState(new Board());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.white));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.black));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null> (null)

  useEffect(() => {
    startNewGame();
    setCurrentPlayer(whitePlayer)
  }, []);

  /**
   * Start new game and init new Board
   */
  function startNewGame() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.initClassicChess()
    setCurrentPlayer(whitePlayer)
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color  === Colors.white ? blackPlayer : whitePlayer)
  }

  return ( 
    
    <div className="app">
      <div>
        <button className='restart' onClick={startNewGame}>Restart</button>
        <BoardComponent 
        board={board} 
        setBoard={setBoard} 
        currentPlayer = {currentPlayer}
        swapPlayer = {swapPlayer}
        />
      </div>
    </div>
  );
}

export default App;
