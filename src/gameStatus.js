import nextPlayer from "./nextPlayer";
export default function Status({ history, step }) {
  const h = history[step];
  let player = nextPlayer(h);
  let status = player ? "Next player: " + player : "Winner: " + h.player;
  return <div className="status">{status}</div>;
}
