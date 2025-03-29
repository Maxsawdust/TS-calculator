import { createContext, ReactNode, useReducer, Dispatch } from "react";
import { displayReducer } from "../reducers/displayReducer";
import { ActionType } from "../reducers/displayReducer";

export interface DisplayState {
  calculationDisplay: string | null;
  resultDisplay: string;
  lastOperator: string | null;
}

const initialState: DisplayState = {
  calculationDisplay: null,
  resultDisplay: "0",
  lastOperator: null,
};

interface DisplayContextType {
  state: DisplayState;
  dispatch: Dispatch<ActionType>;
}

export const DisplayContext = createContext<DisplayContextType>({
  state: initialState,
  dispatch: () => {},
});

export default function DisplayProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(displayReducer, initialState);

  return (
    <DisplayContext.Provider value={{ state, dispatch }}>
      {children}
    </DisplayContext.Provider>
  );
}
