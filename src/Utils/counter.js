// redux
import store from '.././Store/store'
import {getQuestionCount} from '.././Actions/actions'

export function incrementCount() {
  store.dispatch(getQuestionCount({
    count: store.getState().count.count+1,
  }))

}

export function resetCount() {
  store.dispatch(getQuestionCount({
    count: 0,
  }))

}
