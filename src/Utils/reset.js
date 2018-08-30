// redux
import store from '.././Store/store'
import {getScore, getQuestionCount} from '.././Actions/actions'


export function resetScore() {
  store.dispatch(getScore({
    score: 0,
  }))
}

export function resetQuestionCount() {
  store.dispatch(getQuestionCount({
    count: 1,
  }))
}
