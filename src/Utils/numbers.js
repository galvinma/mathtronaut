// redux
import store from '.././Store/store'
import {getLeft, getMid, getRight} from '.././Actions/actions'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumbers(mode) {
  var numbers = []
  var selector;
  if (mode === 'REGULAR') {
    selector = 2
  }
  if (mode === 'CHALLENGE') {
    selector = 3
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

  if (mode === 'CHALLENGE') {
    store.dispatch(getRight({
      right: numbers[2],
    }))
  }

}

export function updateDisplay(mode) {
  // Ping for numbers and update store
  generateNumbers(mode);

}
