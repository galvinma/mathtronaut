// redux
import store from '.././Store/store'
import {getScore, getQuestionCount, getGameState} from '.././Actions/actions'


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

export function resetGameState() {
  store.dispatch(getGameState({
    game_state: "READY",
  }))
}

export function displayMathJumbo() {
  var e = document.getElementById('math_jumbo_container');
  e.style.display = 'flex';
}

export function displayMathForm() {
  var e = document.getElementById('math_form_container');
  e.style.display = 'flex';
}

export function hideMathJumbo() {
  var e = document.getElementById('math_jumbo_container');
  e.style.display = 'none';
}

export function hideMathForm() {
  var e = document.getElementById('math_form_container');
  e.style.display = 'none';
}

export function hideGameEntryAndAnswer() {
  var e = document.getElementById('game_entry');
  var a = document.getElementById('game_answer');
  a.style.display = 'none';
  e.style.display = 'none';
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
  a.style.display = 'inline-block';
  e.style.display = 'none';
  a.focus();
  a.select();
}

export function displayFinalScore() {
  var mj = document.getElementById('final_score');
  mj.style.display = 'block';
}

export function hideFinalScore() {
  var mj = document.getElementById('final_score');
  mj.style.display = 'none';
}

export function displayMathJumboText() {
  var mj = document.getElementById('math_jumbo');
  mj.style.display = 'block';
}

export function hideMathJumboText() {
  var mj = document.getElementById('math_jumbo');
  mj.style.display = 'none';
}

export function displayMathNotification() {
  var mn = document.getElementById('math_notification');
  mn.style.display = 'display: inline-block !important;';
}

export function hideMathNotification() {
  var mn = document.getElementById('math_notification');
  mn.style.display = 'none';
  mn.innerHTML = '';
  var a = document.getElementById('question_count');
  a.style.width = '100%'
  var w = document.getElementById('math_question_display')
  w.style.border = '2px solid transparent';
  clearTimeout(store.getState().flash_id.flash_id);

}

export function displayProgressBar() {
  var p = document.getElementById('progress');
  p.style.display = 'block';
}

export function hideProgressBar() {
  var p = document.getElementById('progress');
  p.style.display = 'none';
}
