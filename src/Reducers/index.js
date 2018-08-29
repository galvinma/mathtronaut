// actions
import { GET_NUMBERS } from "../Constants/action-types";


const initialState = {
  numbers: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NUMBERS:
      return getNumbers(state, action.numbers)
    default:
      return state;
  }
};

function getNumbers(state, numbers) {
  return {
    ... state,
    numbers: numbers
  }
}

export default rootReducer;
