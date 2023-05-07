export default function Status({ history }) {
  const h = history[history.length - 1];
  let status =
    h.to === "end"
      ? "Winner: " + h.player
      : "Next player: " + (h.player === "X" ? "O" : "X");
  return <div className="status">{status}</div>;
}
