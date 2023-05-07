export default function Square({ history, index }) {
  const h = history[history.length - 1];
  return <button className="square">{h.squares[index]}</button>;
}
