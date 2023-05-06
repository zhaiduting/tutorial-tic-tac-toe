import Square from "./gameSquare";
import Status from "./gameStatus";
function Board() {
  const { player, to, squares } = history.slice(-1);
  let status, records;
  let winner = caculateWinner();
  if (winner) {
    status = "Winner: " + winner;
    records = history.slice().push({ player, to: "end", squares });
  } else {
    status = "Next player: " + player;
  }
  return (
    <>
      <Status />
      <div className="board-row">
        <Square index="0" />
        <Square index="1" />
        <Square index="2" />
      </div>
      <div className="board-row">
        <Square index="3" />
        <Square index="4" />
        <Square index="5" />
      </div>
      <div className="board-row">
        <Square index="6" />
        <Square index="7" />
        <Square index="8" />
      </div>
    </>
  );
  function caculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
  }
}
