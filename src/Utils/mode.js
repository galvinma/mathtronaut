import axios from 'axios';

// redux
import store from '.././Store/store'
import { getModalBool } from '.././Actions/actions'

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

export function sendHighScore() {
  try {
      var entry = document.getElementById('username_input').value;
      var Filter = require('bad-words'),
          filter = new Filter();
      if (entry.length >= 20 || entry.length === 0 || entry === "")
      {
        var v = document.getElementById('modal_error');
        v.style.display = 'block';
        setTimeout(function() {
          v.style.display = 'none';
        }, 5000);
        return;
      }
      else if (filter.isProfane(entry))
      {
        var z = document.getElementById('modal_language');
        z.style.display = 'block';
        setTimeout(function() {
          z.style.display = 'none';
        }, 5000);
        return;
      }
      else if (entry.length < 20 && entry.length > 0)
      {
          console.log("checking score")
          axios.get('https://api.mathtronaut.org:5100/api/v1/insertuser', {
            params: {
              username: entry,
              score: store.getState().score.score
            }
          })
          hideModal();
      }
  }
  catch(err) {
      console.log(err)
  }
  finally {
      console.log("no err, returning")
  }
}

export function checkHighScore() {
  axios.get('https://api.mathtronaut.org:5100/api/v1/istop', {
    params: {
      score: store.getState().score.score
    }
  })
  .then((response) => {
    if (response.data === true)
    {
      hideMathJumbo();
      hideGameEntryAndAnswer();
      hideMathForm();
      showModal();
      reloadRocketLaunching();
      displayRocketLaunch();
    }
    else
    {
      displayFinalScore();
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
}

export function hideModal() {
    store.dispatch(getModalBool({
      modal_bool: false,
    }))

    try {
        var m = document.getElementById('hsmodal');
        m.style.display = 'none';
    }
    catch(err) {
        console.log(err)
    }
    finally {
        displayMathForm();
        displayGameEntry();
        resetGame();
        reloadRocketLanding();
        displayRocketLanding();
    }
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

  // if (store.getState().location.location === "REGULAR" )
  // {
  //   checkHighScore();
  // }

  if (store.getState().location.location === "PRACTICE" || store.getState().location.location === "REGULAR" )
  {
    // this occurs during check score call in regular mode
    displayFinalScore();
    reloadRocketLaunching();
    reloadRocketLanding();
    displayRocketLaunch();

    setTimeout(function()
    {
      displayRocketLanding();
    }, 5000);

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
    if (store.getState().location.location === "REGULAR" || store.getState().location.location === "PRACTICE")
    {
      sendHighScore()
      return
    }
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
