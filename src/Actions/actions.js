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
