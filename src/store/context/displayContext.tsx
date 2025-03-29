import { createContext, useReducer } from "react";
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
  dispatch: React.ActionDispatch<[action: ActionType]>;
}

const DisplayContext = createContext<DisplayContextType>({
  state: initialState,
  dispatch: () => {},
});

export default function DisplayProvider({ children }: React.ReactElement) {
  const [state, dispatch] = useReducer(displayReducer, initialState);

  return (
    <DisplayContext.Provider value={{ state, dispatch }}>
      {children}
    </DisplayContext.Provider>
  );
}
