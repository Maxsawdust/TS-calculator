import { useContext } from "react";
import "./Screen.css";
import { DisplayContext } from "../../store/context/displayContext";

export default function Screen() {
  const { state } = useContext(DisplayContext);

  return (
    <div className="Screen">
      <div className="calculation">{state.calculationDisplay}</div>

      <div className="result">{state.resultDisplay}</div>
    </div>
  );
}
