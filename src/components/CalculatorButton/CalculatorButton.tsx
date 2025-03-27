import "./CalculatorButton.css";
import { ButtonContentTypes } from "../ButtonContainer/ButtonContainer";

export default function CalculatorButton({
  content,
  color,
  width,
}: ButtonContentTypes) {
  // map to store colours based on props
  const buttonColors = {
    dark: "#676767",
    orange: "orange",
  };

  return (
    //
    <div
      className="CalculatorButton"
      // defining backgroundColor and gridColum properties based on props
      style={{
        backgroundColor: color ? buttonColors[color] : "#9a9a9a",
        gridColumn: width && `span ${width}`,
      }}
    >
      {content}
    </div>
  );
}
