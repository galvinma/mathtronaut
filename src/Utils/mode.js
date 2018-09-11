import axios from 'axios';

// redux
import store from '.././Store/store'
import { getModalBool } from '.././Actions/actions'
import { getProgressBarId } from '.././Actions/actions'

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
          displayMathForm,
          displayFinalScore,
          hideFinalScore,
          displayMathJumboText,
          hideMathJumbo,
          hideMathJumboText,
          hideGameEntryAndAnswer,
          hideMathForm,
          displayProgressBar,
          hideProgressBar,
          displayMathNotification,
          hideMathNotification } from "./reset"
import { animateTimeLeft } from "./progress"
import {  displayRocketLaunch,
          displayRocketLanding,
          reloadRocketLanding,
          reloadRocketLaunching, } from "./background.js"

var rocket_launch = require('.././Images/Background/Rocket_Launching_Background.gif')
var rocket_landing = require('.././Images/Background/Rocket_Landing_Background.gif')

export function sendHighScore() {
  var entry = document.getElementById('username_input').value;
  if (entry.length >= 20 || entry.length == 0 || entry == "")
  {
    var v = document.getElementById('modal_error');
    v.style.display = 'block';
    setTimeout(function() {
      v.style.display = 'none';
    }, 5000);
    return;
  }

  else if (entry.length < 20 && entry.length > 0) {
      axios.get('http://127.0.0.1:5000/api/v1/insertuser', {
        params: {
          username: entry,
          score: store.getState().score.score
        }
      })
  }

  hideModal()
  reloadRocketLanding();
  displayRocketLanding()
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
      showModal();
      reloadRocketLaunching();
      displayRocketLaunch();
    }
   })
  .catch((error)=>{
     console.log(error);
  });
}

export function showModal() {
    store.dispatch(getModalBool({
      modal_bool: true,
    }))
    var m = document.getElementById('hsmodal');
    m.style.display = 'block';
    var n = document.getElementById('username_input')
    n.focus();
    hideMathJumbo();
    hideGameEntryAndAnswer();
    hideMathForm();
}

export function hideModal() {
    store.dispatch(getModalBool({
      modal_bool: false,
    }))
    var m = document.getElementById('hsmodal');
    m.style.display = 'none';
    displayMathForm();
    displayGameEntry();
    resetGame();
}

export function endGame() {
  // UI
  document.getElementById('game_answer').value = "";
  displayGameEntry();
  hideMathJumboText();
  hideMathNotification();
  hideProgressBar();
  // clear old interval
  clearInterval(store.getState().progress_bar_id.progress_bar_id);
  var elem = document.getElementById("bar");
  elem.style.width = '0%';

  displayFinalScore();
  if (store.getState().location.location === "REGULAR" )
  {
    checkHighScore();
  }

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
  displayProgressBar();
  displayMathNotification();
}

  export function playGame() {
  // redux
  updateDisplay('REGULAR');
  startTimer();
  // UI
  document.getElementById('game_answer').value = "";

}

export function handleSubmit() {
  if (store.getState().modal_bool.modal_bool === true)
  {
    sendHighScore()
    return
  }
  if (store.getState().location.location === "REGULAR" || store.getState().location.location === "PRACTICE")
    {
        if (store.getState().lock.lock === false) {
            enterGame();
            playGame();
            incrementCount();
            animateTimeLeft();
        }
        else if (store.getState().lock.lock === true && store.getState().count.count <= 10)
        {
            var integer = parseInt(document.getElementById('game_answer').value, 10);
            scoreQuestion(integer);
            playGame();
            incrementCount();
            animateTimeLeft();

            if (store.getState().count.count > 10)
            {
              endGame();
            }
        }
      }
    return
  };
