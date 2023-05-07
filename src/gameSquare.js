import nextPlayer from "./nextPlayer";

export default function Square({ history, setHistory, step, setStep, index }) {
  function handleClick() {
    const hist = history.slice(0, step + 1);
    const last = hist[hist.length - 1];
    const player = nextPlayer(last);
    const squares = last.squares.slice();
    if (player && !last.squares[index]) {
      squares[index] = player;
      hist.push({
        player,
        to: index,
        squares,
      });
      setHistory(hist);
      setStep(step + 1);
    }
  }
  return (
    <button className="square" onClick={handleClick}>
      {history[step].squares[index]}
    </button>
  );
}
