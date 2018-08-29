// redux
import store from './../Store/index'
import {getTime} from './../Actions/index'

export function startTimer() {
  var timeleft = new Date().getTime();
  var time = setInterval(function(){
    var now = new Date().getTime();
    var delta = now - timeleft;
    store.dispatch(getTime({
      time: delta,
    }))
    if (delta > 10000) {
      clearInterval(time);
    }
  }, 10);
}
