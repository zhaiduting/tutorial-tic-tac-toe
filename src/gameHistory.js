import { useState } from "reac";
export default function () {
  const [history, setHistory] = useState([
    { player: "X", to: null, squares: Array(9).fill("a") },
  ]);
  return [history, setHistory];
}
