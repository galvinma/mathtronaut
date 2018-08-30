// redux
import store from '.././Store/store'
import {getScore} from '.././Actions/actions'

// functions
import {flashAnswer} from './flash'


export function scoreQuestion(answer) {
    var totalscore = store.getState().score.score;
    var correct = store.getState().left.left * store.getState().mid.mid
    var temp = 0;
    var timebank = 10000;
    if ( correct === answer && store.getState().time.time <= 10000)
    {
      var temp = timebank - store.getState().time.time;
      totalscore = totalscore + temp
      console.log("got here")
      flashAnswer("CORRECT", correct);
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
