// redux
import store from '.././Store/store'
import {getLeft, getMid} from '.././Actions/actions'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function updateDisplay(mode) {
  var numbers = []
  var selector;
  if (mode === 'REGULAR') {
    selector = 2
  }

  for (var i = 0; i < selector; i++) {
      numbers.push(getRandomInt(1,13));
  }

  // Send numbers to the store
  store.dispatch(getLeft({
    left: numbers[0],
  }))

  store.dispatch(getMid({
    mid: numbers[1],
  }))

}
