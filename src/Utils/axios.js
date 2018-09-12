import axios from 'axios';

export function numberGenerator(mode) {
  var selector;
  if (mode === 'REGULAR') {
    selector = 2
  }
  if (mode === 'CHALLENGE') {
    selector = 3
  }
  return new Promise(function(resolve, reject) {
    var numbers = axios.get('http://mathtronaut.org:5100/api/v1/regularmode', {
      params: {
        num: selector
      }
    })
    numbers.then(function(result) {
      var n = JSON.parse(result.data[0].gamelogic.numbers);
      var a = JSON.parse(result.data[0].gamelogic.answer);
      n.push(a)

      if (n && a !== undefined) {
          resolve(n);
      }
      else
      {
        reject(Error("Unable to get game logic from server..."));
      }
    })
  })
}
