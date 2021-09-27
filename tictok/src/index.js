import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props) => {
  
  return(
    <button 
    className="square"
     onClick ={props.onClickEvent}
   
   >
     {props.value}
    </button>
  );
};
const Boart = () => {
  
  const initialSquares = Array(9).fill(null);
  const [squares,setSquares] = useState(initialSquares);
  const [xIsNext,setXsNext] = useState(true);
  
  const handleClickEvent = (i) =>{
   const newSquares = [...squares];
   
   const winnerDeclared = Boolean(calculateWinner(newSquares));
   const squareFilled = Boolean(newSquares[i]);
   if (winnerDeclared || squareFilled){
     return;
   }
   newSquares[i] = xIsNext? 'x' :'O';
    setSquares(newSquares);
    setXsNext(!xIsNext);
  };
  const renderSquare = (i) => {
   return (
     <Square 
     value={squares[i]}
     onClickEvent={()=> handleClickEvent (i)}
     
     />
   );
 };
 
 const winner = calculateWinner(squares);
 const status = winner ?
    `winner: ${winner}` :
    `Next player: ${xIsNext ? 'X':'O'}`; 
 return (
    <div >
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(1)}{renderSquare(2)}{renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}{renderSquare(5)}{renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}{renderSquare(8)}{renderSquare(9)}
      </div>
    </div>

  )
}


const Game = () =>{
  return (
    <div className="game">
      TIC tok
    <Boart/>
    </div>
  );
};

ReactDOM.render(
  <Game/>,
  document.getElementById('root')

  );

  function calculateWinner(squeres){
    const lines =[
      [1,2,3],[4,5,6],[7,8,9],
      [1,4,7],[1,5,9],[2,5,8],
      [3,5,7],[3,6,9],
    ];
    for (let line of lines){
      const [a,b,c] = line;

      if (squeres[a] && squeres[a] === squeres[b] && squeres[a] === squeres[c])
        return squeres[a];
    }
   return null;
  }