export function flashAnswer(status, correct_answer) {
      if (status === "CORRECT")
      {
        var v = document.getElementById('math_correct_notification');
        v.style.display = 'block';
        setTimeout(function() {
          v.style.display = 'none';
        }, 2000);
      }
      if (status === "INCORRECT")
      {
        var q = document.getElementById('math_incorrect_notification');
        q.style.display = 'block';
        setTimeout(function() {
          q.style.display = 'none';
        }, 2000);
      }
}
