import { ACTIONS } from "../actions/actions";
import { DisplayState } from "../context/displayContext";

export interface ActionType {
  type: keyof typeof ACTIONS;
  payload?: any;
}

export const displayReducer = (state: DisplayState, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CALCULATION:
      // if there's nothing in the display, then populate it
      if (!state.calculationDisplay) {
        return {
          ...state,
          calculationDisplay: `${state.resultDisplay} ${action.payload}`,
        };
      }
      // otherwise, add the new number and new operator
      return {
        ...state,
        calculationDisplay: `${state.calculationDisplay} ${state.resultDisplay} ${action.payload}`,
      };
      return state;

    case ACTIONS.UPDATE_RESULT:
      // if the user enters "." when the dispay is 0, then the 0 should stay
      if (state.resultDisplay === "0" && action.payload !== ".")
        return { ...state, resultDisplay: action.payload };
      // if the length is 10, then the user shouldn't be able to type
      if (state.resultDisplay.length === 10) return { ...state };
      /* if the last operator was "=" then the next number pressed should be the
         sole occupant of the result display */
      if (state.lastOperator === "=" && action.payload !== ".")
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
        return state.resultDisplay.startsWith("-")
          ? { ...state, resultDisplay: state.resultDisplay.slice(1) }
          : { ...state, resultDisplay: `-${state.resultDisplay}` };
      }
      return state;

    case ACTIONS.DO_CALCULATION:
      if (!state.calculationDisplay) {
        return state;
      }
      // split the calculation display into an array cntaining its components
      const calculationArr: (string | number)[] =
        state.calculationDisplay.includes("=")
          ? // remove the "=" and return calc display
            [...state.calculationDisplay.slice(0, -2).split(" ")]
          : [
              // this is "number", "operator"
              ...state.calculationDisplay.split(" "),
              // this is "number"
              state.resultDisplay,
            ];

      console.log(calculationArr);

      // defining a "total" variable. arr[0] will always be a number
      let total = Number(calculationArr[0]);

      // iterate through the array by increments of 2 to access the operators (Strings)
      for (let i = 1; i < calculationArr.length; i += 2) {
        const operator = calculationArr[i];
        const nextNumber = Number(calculationArr[i + 1]);

        switch (operator) {
          case "+":
            total += nextNumber;
            break;
          case "-":
            total -= nextNumber;
            break;
          case "×":
            total *= nextNumber;
            break;
          case "÷":
            if (total === 0 || nextNumber === 0) {
              return { ...state, resultDisplay: "ERR" };
            }
            total /= nextNumber;
            break;
        }
      }
      return { ...state, resultDisplay: total };
      console.log(calculationArr);
      return state;

    default:
      return state;
  }
};
