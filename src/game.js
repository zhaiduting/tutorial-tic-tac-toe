import { useState } from "react";
import Board from "./gameBoard";
import Info from "./gameInfo";

export default function Game() {
  const [history, setHistory] = useState([
    { player: "X", to: null, squares: Array(9).fill(null) },
  ]);
  const [step, setStep] = useState(0);
  return (
    <div className="game">
      <div>
        <Board
          className="game-board"
          {...{ history, setHistory, step, setStep }}
        />
      </div>
      <div>
        <Info history={history} />
      </div>
    </div>
  );
}
