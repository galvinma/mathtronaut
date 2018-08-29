// actions
import { GET_NUMBERS, GET_TIME } from "../Constants/action-types";


const initialState = {
  numbers: [],
  time: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NUMBERS:
      return getNumbers(state, action.numbers)
    case GET_TIME:
        return getTime(state, action.time)
    default:
      return state;
  }
};

function getNumbers(state, numbers) {
  return {
    ... state,
    // [Display Left, Display Right, Answer]
    numbers: numbers
  }
}

function getTime(state, time) {
  return {
    ... state,
    time: time
  }
}

export default rootReducer;
