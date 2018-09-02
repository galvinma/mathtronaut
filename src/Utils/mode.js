// redux
import store from '.././Store/store'

// functions
import { scoreQuestion } from "./score"
import { updateDisplay } from "./numbers"
import { incrementCount, resetCount } from "./counter"
import { setLock } from "./lock"
import { startTimer } from "./timer"
import {  resetScore,
          displayGameEntry,
          displayGameAnswer,
          displayMathJumbo,
          displayFinalScore,
          hideFinalScore,
          displayMathJumboText,
          hideMathJumboText } from "./reset"


export function endGame() {
  // UI
  displayGameEntry();
  hideMathJumboText();
  displayFinalScore();

  // redux
  setLock(false)
  resetCount();
}

  export function resetGame() {
  // redux
  resetScore();
  // UI
  document.getElementById('game_answer').value = "";
  displayGameEntry();
  hideMathJumboText();
  hideFinalScore();
}

  export function enterGame() {
  // redux
  resetScore();
  setLock(true);
  incrementCount();
  // UI
  hideFinalScore();
  displayMathJumbo();
  displayMathJumboText();
  displayGameAnswer();
}

  export function playGame() {
  // redux
  updateDisplay('REGULAR');
  startTimer();
  incrementCount();
  // UI
  document.getElementById('game_answer').value = "";

}

export function handleSubmit() {
        console.log(store.getState().lock.lock)
        console.log(store.getState().count.count)
        if (store.getState().lock.lock === false) {
            enterGame()
        }
        else if (store.getState().lock.lock === true && store.getState().count.count <= 9)
        {
            var integer = parseInt(document.getElementById('game_answer').value, 10);
            scoreQuestion(integer);
            playGame();
        }
        else if (store.getState().count.count > 9)
        {
          endGame();
        }
    };
