import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    const newHistory = [...history];

    if (replace === true) {
      const replaced = newHistory.slice(0, history.length - 1);
      replaced.push(newMode);
      setHistory(replaced);
    } else {
      newHistory.push(newMode);
      setHistory(newHistory);
      setMode(newMode);
    }
  }

  function back() {

    const newHistory = [...history];

    if (mode === initial) {
      return;
    } else {
      const previous = newHistory.slice(0, history.length - 1);
      setHistory(previous);
    }
  }

  return {
    mode: history[history.length - 1],
    transition,
    back,
    history,
  };
}