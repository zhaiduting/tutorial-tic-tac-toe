import { useState } from "react";
import Board from "./gameBoard";

export default function Game() {
  return (
    <div className="game">
      <div>
        <Board className="game-board" />
      </div>
      <div></div>
    </div>
  );
}

function Info({ moves }) {
  let items = moves.map((move) => {
    <li></li>;
  });
  return <ol></ol>;
}
