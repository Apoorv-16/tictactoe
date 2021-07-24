import React, { useState} from 'react';
import Board from './Components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {

  const [board, SetBoard] = useState(Array(9).fill(null));
  const [IsXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next Player is ${IsXNext ? 'X' : '0'}`;

  const handleSquareClick = (position) => {
    if(board[position] || winner)
    {
      return;
    }
    
    
    SetBoard((prev) => {

      return prev.map((square, pos)=> {

        if(pos === position){
          return IsXNext ?'X' : '0';

        }
        

        return square;
      })

    });

    setIsXNext((prev) => !prev);



  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2> {message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
