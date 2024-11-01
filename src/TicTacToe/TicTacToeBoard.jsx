import { useState, useEffect } from "react";
import Square from "../components/square";

export default function TicTacToeBoard() {
  const [player, setPlayer] = useState(false);

  const [val, setVal] = useState(Array(9).fill(null));
  const checkWinner = () => {
    const winningOption = [
      [0, 1, 2],
      [0, 3, 6],
      [3, 4, 5],
      [1, 4, 7],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winner = winningOption.find((option) => {
      const [a, b, c] = option;
      return val[a] !== null && val[a] === val[b] && val[b] === val[c];
    });
    return winner ? val[winner[0]] : winner;
  };
  const handleClick = (i) => {
    if (val[i] === null) {
      const res = player ? "X" : "0";
      setVal((val) => {
        val[i] = res;
        return val;
      });
      setPlayer(!player);
    }
  };
  const winner = checkWinner();

  return (
    <>
      {winner ? (
        <>
          <h3>{winner} is Winner</h3>
          <button onClick={() => setVal(Array(9).fill(null))}>
            Play Again
          </button>
        </>
      ) : (
        <>
          <h4>{player ? "X" : "0"} - Please make the next move</h4>
          <div id="mainBoard">
            <div id="row">
              <Square onClick={() => handleClick(0)} val={val[0]} />
              <Square onClick={() => handleClick(1)} val={val[1]} />
              <Square onClick={() => handleClick(2)} val={val[2]} />
            </div>
            <div id="row">
              <Square onClick={() => handleClick(3)} val={val[3]} />
              <Square onClick={() => handleClick(4)} val={val[4]} />
              <Square onClick={() => handleClick(5)} val={val[5]} />
            </div>
            <div id="row">
              <Square onClick={() => handleClick(6)} val={val[6]} />
              <Square onClick={() => handleClick(7)} val={val[7]} />
              <Square onClick={() => handleClick(8)} val={val[8]} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
