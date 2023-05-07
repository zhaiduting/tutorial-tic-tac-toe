import Square from "./gameSquare";
import Status from "./gameStatus";

export default function Board({ history, setHistory, step }) {
  const { player, to, squares } = history[step];
  // let winner = caculateWinner();
  // if (winner) {
  //   records = history.slice().push({ player, to: "end", squares });
  //   setHistory(records);
  // }
  return (
    <>
      <Status history={history} />
      <div className="board-row">
        <Square history={history} index="0" />
        <Square history={history} index="1" />
        <Square history={history} index="2" />
      </div>
      <div className="board-row">
        <Square history={history} index="3" />
        <Square history={history} index="4" />
        <Square history={history} index="5" />
      </div>
      <div className="board-row">
        <Square history={history} index="6" />
        <Square history={history} index="7" />
        <Square history={history} index="8" />
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
