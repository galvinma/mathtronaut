export function flashAnswer(status, correct_answer) {
    if (status === "CORRECT")
    {
      var v = document.getElementById('math_notification');
      v.style.display = 'block';
      setTimeout(function() {
        v.style.display = 'none';
      }, 1000);

    }
}
