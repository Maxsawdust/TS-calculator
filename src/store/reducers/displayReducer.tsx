import { ACTIONS } from "../actions/actions";
import { DisplayState } from "../context/displayContext";

export interface ActionType {
  type: keyof typeof ACTIONS;
  payload?: any;
}

export const displayReducer = (state: DisplayState, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CALCULATION:
      break;

    case ACTIONS.UPDATE_RESULT:
      // if the user enters "." when the dispay is 0, then the 0 should stay
      if (state.resultDisplay === "0" && action.payload !== ".")
        return { ...state, resultDisplay: action.payload };
      // if the length is 10, then the user shouldn't be able to type
      if (state.resultDisplay.length === 10) return { ...state };
      /* if the last operator was "=" then the next number pressed should be the
         sole occupant of the result display */
      if (state.lastOperator === "=")
        return { ...state, resultDisplay: action.payload };
      // otherwise, the numbers should concatenate to the end of the string
      return { ...state, resultDisplay: state.resultDisplay + action.payload };

    case ACTIONS.UPDATE_OPERATOR:
      return { ...state, lastOperator: action.payload };

    case ACTIONS.CLEAR_ALL:
      // reset the state
      return {
        resultDisplay: "0",
        calculationDisplay: null,
        lastOperator: null,
      };

    case ACTIONS.CLEAR_ENTRY:
      return { ...state, resultDisplay: "0" };

    case ACTIONS.SWITCH_POLARITY:
      if (state.resultDisplay !== "0") {
        if (state.resultDisplay.charAt(0) === "-") {
          return { ...state, resultDisplay: state.resultDisplay.slice(1) };
        } else {
          return { ...state, resultDisplay: "-" + state.resultDisplay };
        }
      }
  }
};
