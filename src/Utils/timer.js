// redux
import store from './../Store/store'
import {getTime} from './../Actions/actions'

export function startTimer(flag) {
  var timeleft = new Date().getTime();
  var time = setInterval(function(){
    var now = new Date().getTime();
    var delta = now - timeleft;
    store.dispatch(getTime({
      time: delta,
    }))
    if (delta > 10000 || flag === "RESET") {
      clearInterval(time);
    }
  }, 10);
}
