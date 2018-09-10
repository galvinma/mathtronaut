export const getLeft = left => ({
  type: "GET_LEFT",
  left
});

export const getMid = mid => ({
  type: "GET_MID",
  mid
});

export const getRight = right => ({
  type: "GET_RIGHT",
  right
});


export const getTime = time => ({
  type: "GET_TIME",
  time
});

export const getScore = score => ({
  type: "GET_SCORE",
  score
});

export const getQuestionCount = count => ({
  type: "GET_QUESTION_COUNT",
  count
});

export const getLastLeft = last_left => ({
  type: "LAST_LEFT",
  last_left
});

export const getLastMid = last_mid => ({
  type: "LAST_MID",
  last_mid
});

export const getLastRight = last_right => ({
  type: "LAST_RIGHT",
  last_right
});

export const getLastAnswer = last_answer => ({
  type: "LAST_ANSWER",
  last_answer
});

export const getGameState = game_state => ({
  type: "GAME_STATE",
  game_state
})

export const getLock = lock => ({
  type: "LOCK",
  lock
})

export const getReset = reset => ({
  type: "RESET",
  reset
})

export const getLocation = location => ({
  type: "LOCATION",
  location
})

export const getPracticeNumber = practice_number => ({
  type: "PRACTICE_NUMBER",
  practice_number
})

export const getTimeDelta = time_delta => ({
  type: "GET_TIME_DELTA",
  time_delta
})

export const getStartTime = start_time => ({
  type: "GET_START_TIME",
  start_time
})

export const getModalBool = modal_bool => ({
  type: "MODAL_BOOL",
  modal_bool
})

export const getProgressBarId = progress_bar_id => ({
  type: "PROGRESS_BAR_ID",
  progress_bar_id
})
