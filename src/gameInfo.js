export default function ({ history }) {
  let records = history.map((h) => {
    return (
      <li>
        <button>{h.to ? "Move to #" + h.to : "Begin"}</button>
      </li>
    );
  });
  return <ol>{records}</ol>;
}
