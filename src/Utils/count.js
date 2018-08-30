// redux
import store from '.././Store/store'
import { getQuestionCount } from '.././Actions/actions'

export function updateQuestionCount() {
  var totalcount = store.getState().count.count;
  totalcount++
  store.dispatch(getQuestionCount({
    count: totalcount,
  }))
}
