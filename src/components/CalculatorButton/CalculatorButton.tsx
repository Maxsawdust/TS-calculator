import "./CalculatorButton.css";
import { ButtonContentTypes } from "../ButtonContainer/ButtonContainer";
import { useContext } from "react";
import {
  CalculationContext,
  EqualsContext,
  ResultContext,
} from "../../store/context/displayContext";

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

  // accessing result display from context
  const { resultDisplay, setResultDisplay } = useContext(ResultContext);
  // accessing calculationDisplay from context
  const { calculationDisplay, setCalculationDisplay } =
    useContext(CalculationContext);
  // accessing boolean equals value
  const { equalsPressed, setEqualsPressed } = useContext(EqualsContext);

  const handleClick = () => {
    // handling behaviour for number buttons
    if (type === "number") {
      if (equalsPressed) {
        setResultDisplay(content);
        setEqualsPressed(false);
        return;
      }

      // resetting the initial value of 0 unless the user clicks "."
      if (resultDisplay === "0" && content !== ".") setResultDisplay("");
      // making sure the display cannot have more than 10 characters
      if (resultDisplay.length === 10) return;
      // adding the clicked button's string to the value
      setResultDisplay((prev) => prev + content);
    }

    // handling behaviour for modifier buttons
    else if (type === "modifier") {
      // switch statement to determine what to do on button press
      switch (content) {
        // clear all
        case "C":
          setResultDisplay("0");
          setCalculationDisplay(null);
          break;
        // clear the entry
        case "CE":
          setResultDisplay("0");
          break;
        // switch polarity
        case "±":
          if (resultDisplay !== "0") {
            if (resultDisplay.charAt(0) === "-") {
              setResultDisplay((prev) => prev.slice(1));
            } else {
              setResultDisplay((prev) => "-" + prev);
            }
          }
          break;
      }
    }
    // handling behaviour for operator buttons
    else {
      if (content === "=") {
        // update boolean state
        setEqualsPressed(true);
        // do the calculation
        const result = doCalculation();
        // display result of calculation
        setResultDisplay(result);
        // display the calculation done in calculationDisplay
        updateDisplay();
      } else {
        // set the calculation display to the result display + the operator
        updateDisplay();
        // clear result display
        setResultDisplay("0");
      }
    }
  };

  const doCalculation = () => {
    // if calculationDisplay is null then the user has pressed n =, and the result should be n
    if (calculationDisplay === null) {
      return resultDisplay;
    }
    return "poo";

    // if it's not null, then the calculation needs to be made
    console.log(calculationDisplay);
  };

  const updateDisplay = () => {
    setCalculationDisplay((prev) => {
      if (prev !== null) {
        return prev + " " + resultDisplay + " " + content;
      } else {
        return resultDisplay + " " + content;
      }
    });
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
