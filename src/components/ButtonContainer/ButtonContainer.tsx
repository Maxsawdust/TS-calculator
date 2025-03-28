import { CalculatorButton } from "../";
import "./ButtonContainer.css";

// defining the type of content/props that buttons will have
export interface ButtonContentTypes {
  content: string;
  color?: "dark" | "orange";
  width?: number;
  type?: "modifier" | "operator" | "number";
}

export default function ButtonContainer() {
  // array to store button information
  const buttonContents: ButtonContentTypes[] = [
    { content: "C", color: "dark", type: "modifier" },
    { content: "CE", color: "dark", type: "modifier" },
    { content: "±", color: "dark", type: "modifier" },
    { content: "÷", color: "orange", type: "operator" },
    { content: "7" },
    { content: "8" },
    { content: "9" },
    { content: "×", color: "orange", type: "operator" },
    { content: "4" },
    { content: "5" },
    { content: "6" },
    { content: "-", color: "orange", type: "operator" },
    { content: "1" },
    { content: "2" },
    { content: "3" },
    { content: "+", color: "orange", type: "operator" },
    { content: "0", width: 2 },
    { content: "." },
    { content: "=", color: "orange", type: "operator" },
  ];

  return (
    <div className="ButtonContainer">
      {/* maping through array to display buttons */}
      {buttonContents.map((symbol) => {
        return (
          <CalculatorButton
            content={symbol.content}
            color={symbol.color && symbol.color}
            width={symbol.width && symbol.width}
            type={symbol.type || "number"}
            key={symbol.content}
          />
        );
      })}
    </div>
  );
}
