import "./CalculatorButton.css";
import { ButtonContentTypes } from "../ButtonContainer/ButtonContainer";
import { useContext } from "react";
import { DisplayContext } from "../../store/context/displayContext";
import { ACTIONS } from "../../store/actions/actions";

export default function CalculatorButton({
  content,
  color,
  width,
  type,
}: ButtonContentTypes) {
  // map to store colours based on props
  const buttonColors = {
    dark: "#676767",
    orange: "orange",
  };

  // accessing reducer from context
  const { state, dispatch } = useContext(DisplayContext);

  const handleClick = () => {
    // handling behaviour for number buttons
    if (type === "number") {
      dispatch({ type: ACTIONS.UPDATE_RESULT, payload: content });
    }

    // handling behaviour for modifier buttons
    else if (type === "modifier") {
      // switch statement to determine what to do on button press
      switch (content) {
        // clear all
        case "C":
          dispatch({ type: ACTIONS.CLEAR_ALL });
          break;
        // clear the entry
        case "CE":
          dispatch({ type: ACTIONS.CLEAR_ENTRY });
          break;
        // switch polarity
        case "±":
          dispatch({ type: ACTIONS.SWITCH_POLARITY });
          break;
      }
    }
    // handling behaviour for operator buttons
    else {
      // if equals is pressed then do the calculation
      if (content === "=") {
        // update the calculation display to reflect the operator pressed
        dispatch({ type: ACTIONS.UPDATE_CALCULATION, payload: content });
        // do calculation
        dispatch({ type: ACTIONS.DO_CALCULATION });
        return;
      }
      // set the last operator pressed
      dispatch({ type: ACTIONS.UPDATE_OPERATOR, payload: content });
      // update the calculation display to reflect the operator pressed
      dispatch({ type: ACTIONS.UPDATE_CALCULATION, payload: content });
      // clear the result display
      dispatch({ type: ACTIONS.CLEAR_ENTRY });
    }
  };

  return (
    //
    <button
      className="CalculatorButton"
      // defining backgroundColor and gridColum properties based on props
      style={{
        backgroundColor: color ? buttonColors[color] : "#9a9a9a",
        gridColumn: width && `span ${width}`,
      }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
