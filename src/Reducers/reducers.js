// functions
import { getRandomInt } from '.././Utils/numbers'

// actions
import {  GET_LEFT,
          GET_MID,
          GET_RIGHT,
          GET_SCORE,
          GET_QUESTION_COUNT,
          LAST_LEFT,
          LAST_MID,
          LAST_RIGHT,
          LAST_ANSWER,
          GAME_STATE,
          LOCK,
          RESET,
          LOCATION,
          PRACTICE_NUMBER,
          GET_START_TIME,
          MODAL_BOOL,
          PROGRESS_BAR_ID,
          FLASH_ID,
        }
from "../Constants/action-types";


const initialState = {
  left: {left:1},
  mid: {mid:1},
  right: {right:1},
  time: {time:0},
  score: {score:0},
  count: {count:0},
  last_left: {last_left:1},
  last_right: {last_right:1},
  last_mid: {last_mid:1},
  last_answer: {last_answer:1},
  game_state: {game_state:"READY"},
  lock: {lock:false},
  location: {location:"LANDING"},
  practice_number: {practice_number:getRandomInt(1,13)},
  time_delta: {time_delta:0},
  start_time: {start_time:0},
  modal_bool: {modal_bool:false},
  progress_bar_id: {progress_bar_id:0},
  flash_id: {flash_id:0}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return (state = initialState)
    case GET_LEFT:
      return getLeft(state, action.left)
    case GET_MID:
      return getMid(state, action.mid)
    case GET_RIGHT:
      return getRight(state, action.right)
    case GET_SCORE:
        return getScore(state, action.score)
    case GET_QUESTION_COUNT:
        return getQuestionCount(state, action.count)
    case LAST_LEFT:
        return getLastLeft(state, action.last_left)
    case LAST_MID:
        return getLastMid(state, action.last_mid)
    case LAST_RIGHT:
        return getLastRight(state, action.last_right)
    case LAST_ANSWER:
        return getLastAnswer(state, action.last_answer)
    case GAME_STATE:
        return getGameState(state, action.game_state)
    case LOCK:
        return getLock(state, action.lock)
    case LOCATION:
        return getLocation(state, action.location)
    case PRACTICE_NUMBER:
        return getPracticeNumber(state, action.practice_number)
    case GET_START_TIME:
        return getStartTime(state, action.start_time)
    case MODAL_BOOL:
        return getModalBool(state, action.modal_bool)
    case PROGRESS_BAR_ID:
        return getProgressBarId(state, action.progress_bar_id)
    case FLASH_ID:
        return getFlashId(state, action.flash_id)
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

function getLastLeft(state, last_left) {
  return {
    ...state,
    last_left: last_left
  }
}

function getLastRight(state, last_right) {
  return {
    ...state,
    last_right: last_right
  }
}

function getLastMid(state, last_mid) {
  return {
    ...state,
    last_mid: last_mid
  }
}

function getLastAnswer(state, last_answer) {
  return {
    ...state,
    last_answer: last_answer
  }
}

function getGameState(state, game_state) {
  return {
    ...state,
    game_state: game_state
  }
}

function getLock(state, lock) {
  return {
    ...state,
    lock: lock
  }
}

function getLocation(state, location) {
  return {
    ...state,
    location: location
  }
}

function getPracticeNumber(state, practice_number) {
  return {
    ...state,
    practice_number: practice_number
  }
}

function getStartTime(state, start_time) {
  return {
    ...state,
    start_time: start_time
  }
}

function getModalBool(state, modal_bool) {
  return {
    ...state,
    modal_bool: modal_bool
  }
}

function getProgressBarId(state, progress_bar_id) {
  return {
    ...state,
    progress_bar_id: progress_bar_id
  }
}

function getFlashId(state, flash_id) {
  return {
    ...state,
    flash_id: flash_id
  }
}

export default rootReducer;
