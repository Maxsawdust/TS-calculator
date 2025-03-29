import { useContext } from "react";
import "./Screen.css";
import {
  CalculationContext,
  ResultContext,
} from "../../store/context/displayContext";

export default function Screen() {
  const { resultDisplay } = useContext(ResultContext);
  const { calculationDisplay } = useContext(CalculationContext);

  return (
    <div className="Screen">
      <div className="calculation">{calculationDisplay}</div>

      <div className="result">{resultDisplay}</div>
    </div>
  );
}
