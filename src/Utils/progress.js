// redux
import store from '.././Store/store'
import { getProgressBarId } from '.././Actions/actions'

export function animateTimeLeft() {
    // clear old interval
    clearInterval(store.getState().progress_bar_id.progress_bar_id);

    // create bar
    var elem = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 100);
    // set new id in the Store
    store.dispatch(getProgressBarId({
      progress_bar_id: id,
    }))
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
