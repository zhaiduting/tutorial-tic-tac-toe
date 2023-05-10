import Square from "./gameSquare";
import Status from "./gameStatus";

export default function Board({ history, setHistory, step, setStep }) {
  const { player, to, squares } = history[step];
  return (
    <>
      <Status history={history} step={step} />
      <div className="board-row">
        <Square {...{ history, setHistory, step, setStep }} index="0" />
        <Square {...{ history, setHistory, step, setStep }} index="1" />
        <Square {...{ history, setHistory, step, setStep }} index="2" />
      </div>
      <div className="board-row">
        <Square {...{ history, setHistory, step, setStep }} index="3" />
        <Square {...{ history, setHistory, step, setStep }} index="4" />
        <Square {...{ history, setHistory, step, setStep }} index="5" />
      </div>
      <div className="board-row">
        <Square {...{ history, setHistory, step, setStep }} index="6" />
        <Square {...{ history, setHistory, step, setStep }} index="7" />
        <Square {...{ history, setHistory, step, setStep }} index="8" />
      </div>
    </>
  );
}
