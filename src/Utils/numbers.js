// redux
import store from '.././Store/store'
import {getLeft, getMid, getPracticeNumber} from '.././Actions/actions'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function updateDisplay() {
  var numbers = []
  if (store.getState().location.location === 'REGULAR') {
    for (var i = 0; i < 2; i++) {
        numbers.push(getRandomInt(1,13));
    }
  }
  if (store.getState().location.location === 'PRACTICE') {
    numbers.push(store.getState().practice_number.practice_number);
    for (var z = 0; z < 1; z++) {
        numbers.push(getRandomInt(1,13));
    }
  }

  // Send numbers to the store
  store.dispatch(getLeft({
    left: numbers[0],
  }))

  store.dispatch(getMid({
    mid: numbers[1],
  }))

}

export function updatePracticeNumber(value) {
  console.log(value)
  store.dispatch(getPracticeNumber({
    practice_number: value,
  }))
}
