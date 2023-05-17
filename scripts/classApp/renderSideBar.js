
import { runningWorkout } from "./runningWorkout.js";

import { cyclingWorkout } from "./cyclingWorkout.js";

function renderSideBar(workoutsArr) {
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form');

  let df = new DocumentFragment();
  workoutsArr.forEach(ele => {
    l(ele);
    let li = document.createElement('li');
   
    li.dataset.id = ele.id
    li.classList.add('workout');
  
    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = ele.inputType === 'running'? runningWorkout(ele) : cyclingWorkout(ele)
    d(li.getAttribute('data-id'))
    df.prepend(form);
    df.appendChild(li);
  });
  workoutsUL.replaceChildren(df);
 
}

export { renderSideBar };
