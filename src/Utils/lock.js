// redux
import store from '.././Store/store'
import {getLock} from '.././Actions/actions'

export function setLock(lock) {
  store.dispatch(getLock({
    lock: lock,
  }))
}
