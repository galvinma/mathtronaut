import axios from 'axios';

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

export function sendHighScore() {
  var entry = document.getElementById('username_input').value;
  axios.get('http://127.0.0.1:5000/api/v1/insertuser', {
    params: {
      username: entry,
      score: store.getState().score.score
    }
  })
  hideModal()
}

export function checkHighScore() {
  var ishigh = axios.get('http://127.0.0.1:5000/api/v1/istop', {
    params: {
      score: store.getState().score.score
    }
  })
  .then((response) => {
    if (response.data === true)
    {
      showModal()
    }
   })
  .catch((error)=>{
     console.log(error);
  });
}

export function showModal() {
    var m = document.getElementById('hsmodal');
    m.style.display = 'block';
}

export function hideModal() {
    var m = document.getElementById('hsmodal');
    m.style.display = 'none';
}

export function endGame() {
  // UI
  document.getElementById('game_answer').value = "";
  displayGameEntry();
  hideMathJumboText();
  displayFinalScore();
  checkHighScore();
  showModal();

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
