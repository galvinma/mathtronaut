// actions
import {  GET_LEFT,
          GET_MID,
          GET_RIGHT,
          GET_TIME,
          GET_SCORE,
          GET_QUESTION_COUNT,
        }
from "../Constants/action-types";


const initialState = {
  left: 1,
  mid: 1,
  right: "",
  time: 0,
  score: 0,
  count: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEFT:
      return getLeft(state, action.left)
    case GET_MID:
      return getMid(state, action.mid)
    case GET_RIGHT:
      return getRight(state, action.right)
    case GET_TIME:
        return getTime(state, action.time)
    case GET_SCORE:
        return getScore(state, action.score)
    case GET_QUESTION_COUNT:
        return getQuestionCount(state, action.count)
    default:
      return state;
  }
};

function getLeft(state, left) {
  return {
    ...state,
    left: left
  }
}

function getRight(state, right) {
  return {
    ...state,
    right: right
  }
}

function getMid(state, mid) {
  return {
    ...state,
    mid: mid
  }
}

function getTime(state, time) {
  return {
    ...state,
    time: time
  }
}

function getScore(state, score) {
  return {
    ...state,
    score: score
  }
}

function getQuestionCount(state, count) {
  return {
    ...state,
    count: count
  }
}

export default rootReducer;
