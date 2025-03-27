import "./CalculatorButton.css";

interface CalculatorButtonProps {
  content: string | React.ReactElement;
}

export default function CalculatorButton({ content }: CalculatorButtonProps) {
  return (
    //
    <div className="CalculatorButton">{content}</div>
  );
}
