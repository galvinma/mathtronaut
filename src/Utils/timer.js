// redux
import store from './../Store/store'
import {getStartTime} from './../Actions/actions'

export function startTimer() {
  store.dispatch(getStartTime({
    start_time: new Date().getTime(),
  }))
}
