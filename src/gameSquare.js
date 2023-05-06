import [   history, setHistory] from "./gameHistory";
export default function Square({ index }) {
    const h= history.slice(-1)
  return <button className="square">{h.square[index]}</button>;
}
