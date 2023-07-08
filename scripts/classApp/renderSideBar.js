import { moveMap } from "./moveMap.js";
import { runningWorkout } from "./runningWorkout.js";

import { cyclingWorkout } from "./cyclingWorkout.js";

function renderSideBar(workoutsArr) {
  
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form');

  let df = new DocumentFragment();
  workoutsArr.reverse().forEach(ele => {
let Delete = document.createElement('button');
Delete.classList.add('btn', 'btn--small', 'btn--delete');
Delete.dataset.id = ele.id;
Delete.textContent = 'Delete';
    let li = document.createElement('li');
   li.addEventListener('click', moveMap.bind(null, ele))
   li.addEventListener('click', (e) => {l(e)})
    li.dataset.id = ele.id
    li.classList.add('workout');

    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = ele.inputType === 'running'? runningWorkout(ele) : cyclingWorkout(ele)
    li.appendChild(Delete);
    
    
    df.prepend(form);
    df.appendChild(li);
  });
  workoutsUL.replaceChildren(df);
 
}

export { renderSideBar };
