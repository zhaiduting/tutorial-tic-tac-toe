export default function ({ history, setStep }) {
  function handleClick(i) {
    setStep(i);
  }
  let records = history.map((h, i) => {
    return (
      <li>
        <button onClick={() => handleClick(i)}>
          {i > 0 ? "Move to #" + h.to : "Game start"}
        </button>
      </li>
    );
  });
  return <ol>{records}</ol>;
}
