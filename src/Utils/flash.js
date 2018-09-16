// redux
import store from '.././Store/store'
import { getFlashId } from '.././Actions/actions'

export function flashAnswer(status, correct_answer) {

      clearTimeout(store.getState().flash_id.flash_id);

      if (status === "CORRECT")
      {
        var v = document.getElementById('math_notification');
        v.style.width = '80%'
        v.innerHTML = 'CORRECT!';

        var a = document.getElementById('question_count');
        a.style.width = '20%'

        var w = document.getElementById('math_question_display')
        w.style.border = '3px solid';
        w.style.borderColor = 'rgb(68, 169, 66)';

        var x = setTimeout(function() {
          w.style.border = '3px solid transparent';
          v.innerHTML = '';
          a.style.width = '100%'
        }, 2000);

        store.dispatch(getFlashId({
          flash_id: x,
        }))

      }
      if (status === "INCORRECT")
      {
        var q = document.getElementById('math_notification');
        q.style.width = '80%'
        q.innerHTML = `INCORRECT! ${store.getState().last_left.last_left} x ${store.getState().last_mid.last_mid} = ${store.getState().last_answer.last_answer}`;

        var b = document.getElementById('question_count');
        b.style.width = '20%'

        var m = document.getElementById('math_question_display')
        m.style.border = '3px solid';
        m.style.borderColor = 'rgb(169, 68, 66)';

        var y = setTimeout(function() {
          m.style.border = '3px solid transparent';
          q.innerHTML = '';
          b.style.width = '100%'
        }, 2000);

        store.dispatch(getFlashId({
          flash_id: y,
        }))

      }
}
