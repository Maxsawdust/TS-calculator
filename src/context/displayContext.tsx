import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ResultContextType {
  resultDisplay: string;
  setResultDisplay: Dispatch<SetStateAction<string>>;
}

export const ResultContext = createContext<ResultContextType>({
  resultDisplay: "0",
  setResultDisplay: () => {},
});

interface CalculationContextType {
  calculationDisplay: string | null;
  setCalculationDisplay: Dispatch<SetStateAction<string | null>>;
}

export const CalculationContext = createContext<CalculationContextType>({
  calculationDisplay: null,
  setCalculationDisplay: () => {},
});

interface EqualsContextType {
  equalsPressed: boolean;
  setEqualsPressed: Dispatch<SetStateAction<boolean>>;
}

export const EqualsContext = createContext<EqualsContextType>({
  equalsPressed: false,
  setEqualsPressed: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [resultDisplay, setResultDisplay] = useState("0");
  const [calculationDisplay, setCalculationDisplay] = useState<string | null>(
    null
  );
  const [equalsPressed, setEqualsPressed] = useState(false);

  return (
    <ResultContext.Provider value={{ resultDisplay, setResultDisplay }}>
      <CalculationContext.Provider
        value={{ calculationDisplay, setCalculationDisplay }}>
        <EqualsContext.Provider value={{ equalsPressed, setEqualsPressed }}>
          {children}
        </EqualsContext.Provider>
      </CalculationContext.Provider>
    </ResultContext.Provider>
  );
}
