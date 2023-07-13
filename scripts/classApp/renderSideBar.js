import { moveMap } from "./moveMap.js";
import { runningWorkout } from "./runningWorkout.js";

import { cyclingWorkout } from "./cyclingWorkout.js";
import { deleteWorkout } from "./deleteWorkout.js";



function renderSideBar() {
  l('renderSideBar')
  const workoutsUL = document.querySelector('.workouts');
  // let form = document.querySelector('form');

  let df = new DocumentFragment();
  
  this.workouts.forEach(ele => {
  
  l('ele')
let Delete = document.createElement('button');
Delete.classList.add('btn', 'btn--small', 'btn--delete');
Delete.dataset.id = ele.id;
Delete.textContent = 'Delete';
    let li = document.createElement('li');
   li.addEventListener('click', moveMap.bind(null, ele))
   li.addEventListener('click', (e) => {deleteWorkout.call(this, e)})
    li.dataset.id = ele.id
    li.classList.add('workout');
    

    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = ele.inputType === 'running'? runningWorkout(ele) : cyclingWorkout(ele);
    li.appendChild(Delete);
    
    df.replaceChildren(li);
    
  
  });


  workoutsUL.appendChild(df);
 
}

export { renderSideBar };
