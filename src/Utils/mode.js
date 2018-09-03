// redux
import store from '.././Store/store'

// functions
import { scoreQuestion } from "./score"
import { updateDisplay } from "./numbers"
import { incrementCount, resetCount } from "./counter"
import { setLock } from "./lock"
import { startTimer } from "./timer"
import {  resetScore,
          resetQuestionCount,
          displayGameEntry,
          displayGameAnswer,
          displayMathJumbo,
          displayFinalScore,
          hideFinalScore,
          displayMathJumboText,
          hideMathJumboText } from "./reset"

export function endGame() {
  // UI
  document.getElementById('game_answer').value = "";
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
  resetQuestionCount();
  setLock(false);
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
  // UI
  updateDisplay();
  hideFinalScore();
  displayMathJumbo();
  displayMathJumboText();
  displayGameAnswer();
}

  export function playGame() {
  // redux
  updateDisplay('REGULAR');
  startTimer("RESET");
  startTimer();
  // UI
  document.getElementById('game_answer').value = "";

}

export function handleSubmit() {
  if (store.getState().location.location === "REGULAR" || store.getState().location.location === "PRACTICE")
    {
        if (store.getState().lock.lock === false) {
            enterGame();
            playGame();
            incrementCount();
        }
        else if (store.getState().lock.lock === true && store.getState().count.count <= 10)
        {
            var integer = parseInt(document.getElementById('game_answer').value, 10);
            scoreQuestion(integer);
            playGame();
            incrementCount();

            if (store.getState().count.count > 10)
            {
              endGame();
            }
        }
      }
    return
  };
