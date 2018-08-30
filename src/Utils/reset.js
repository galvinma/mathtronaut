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
    count: 0,
  }))
}

export function displayGameEntry() {
  var e = document.getElementById('game_entry');
  var a = document.getElementById('game_answer');
  a.style.display = 'none';
  e.style.display = 'block';
}

export function displayGameAnswer() {
  var e = document.getElementById('game_entry');
  var a = document.getElementById('game_answer');
  a.style.display = 'block';
  e.style.display = 'none';
  a.focus();
  a.select();
}

export function displayMathJumboText() {
  var mj = document.getElementById('math_jumbo');
  mj.style.display = 'block';
}
