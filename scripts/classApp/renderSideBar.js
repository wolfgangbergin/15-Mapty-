
import { runningWorkout } from "./runningWorkout.js";

function renderSideBar(workoutsArr) {
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form');

  let df = new DocumentFragment();
  workoutsArr.forEach(ele => {
    l(ele);
    let li = document.createElement('li');
    li.classList.add('workout');
    li.classList.add('workout--running');
    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = runningWorkout(ele);

    df.prepend(form);
    df.appendChild(li);
  });
  workoutsUL.replaceChildren(df);
 
}

export { renderSideBar };
