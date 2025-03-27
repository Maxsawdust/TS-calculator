import { CalculatorButton } from "../";
import "./ButtonContainer.css";

export default function ButtonContainer() {
  const bckSpc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000">
      <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
    </svg>
  );
  const buttonContents: (string | React.ReactElement)[] = [
    "%",
    "CE",
    "C",
    bckSpc,
    "1/𝑥",
    "x²",
    "√a",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "±",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="ButtonContainer">
      {buttonContents.map((symbol) => {
        return <CalculatorButton content={symbol} />;
      })}
    </div>
  );
}
