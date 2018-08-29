import axios from 'axios';

export function numberGenerator(mode, callback) {
  if (mode === 'REGULAR') {
      var numbers = axios.get('http://127.0.0.1:5000/api/v1/regularmode', {
        params: {
          num: 2
        }
      })
      numbers.then(function(result) {
        var n = result.data[0].gamelogic.numbers;

        console.log("in the number generator")
        console.log("this is n "+n)
        // var a = result.data[0].gamelogic.answer

        return n
      })
  }
  // return
}
