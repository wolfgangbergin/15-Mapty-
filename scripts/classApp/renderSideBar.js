import { moveMap } from "./moveMap.js";
import { runningWorkout } from "./runningWorkout.js";

import { cyclingWorkout } from "./cyclingWorkout.js";

function renderSideBar(workoutsArr) {
  l(workoutsArr)
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form');

  let df = new DocumentFragment();
  workoutsArr.reverse().forEach(ele => {
  
    let li = document.createElement('li');
   li.addEventListener('click', moveMap.bind(null, ele))
    li.dataset.id = ele.id
    li.classList.add('workout');

    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = ele.inputType === 'running'? runningWorkout(ele) : cyclingWorkout(ele)
    
    
    df.prepend(form);
    df.appendChild(li);
  });
  workoutsUL.replaceChildren(df);
 
}

export { renderSideBar };
