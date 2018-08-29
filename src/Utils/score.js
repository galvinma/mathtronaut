// redux
import store from '.././Store/store'
import {getScore} from '.././Actions/actions'

export function resetScore() {
  store.dispatch(getScore({
    score: 0,
  }))
}

export function scoreQuestion(answer) {
    var totalscore = store.getState().score.score;
    var temp = 0;
    var timebank = 10000;
    if (store.getState().time.time >= 10000)
    {
      console.log("User took too long, score of 0")
    }
    else if (store.getState().left.left * store.getState().mid.mid === answer)
    {
      var temp = timebank - store.getState().time.time;
      totalscore = totalscore + temp
      console.log("Correct! User scored "+temp)
      console.log("New total score is "+totalscore)
    }
    else
    {
      console.log("Incorrect!")
    }
    // send new total score to the store
    store.dispatch(getScore({
      score: totalscore,
    }))
    console.log(store.getState().score.score)
}
