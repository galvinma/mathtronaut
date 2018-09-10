// redux
import store from '.././Store/store'
import {  getScore,
          getLastLeft,
          getLastMid,
          getLastAnswer, } from '.././Actions/actions'

// functions
import {flashAnswer} from './flash'


export function scoreQuestion(answer) {
    // Set current question to last question in store...
    store.dispatch(getLastLeft({
      last_left: store.getState().left.left,
    }))
    store.dispatch(getLastMid({
      last_mid: store.getState().mid.mid,
    }))

    // Score the question
    var totalscore = store.getState().score.score;
    var correct = store.getState().left.left * store.getState().mid.mid

    // Store the last answer in the store
    store.dispatch(getLastAnswer({
      last_answer: correct,
    }))

    if (correct === answer)
    {
      flashAnswer("CORRECT", correct);

      var start = store.getState().start_time.start_time
      var now = new Date().getTime();
      var delta = now - start;
      if (delta <= 10000 && delta >= 0)
      {
        var s = 10000 - delta
        totalscore = totalscore + s
      }
    }
    else
    {
      flashAnswer("INCORRECT", correct)
    }

    // send new total score to the store
    store.dispatch(getScore({
      score: totalscore,
    }))
}
