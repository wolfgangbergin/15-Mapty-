import { moveMap } from "./moveMap.js";
import { runningWorkout } from "./runningWorkout.js";

import { cyclingWorkout } from "./cyclingWorkout.js";
import { deleteWorkout } from "./deleteWorkout.js";



function renderSideBar() {

  const workoutsUL = document.querySelector('.workouts');
  // let form = document.querySelector('form');

  let df = new DocumentFragment();
 
  this.workouts.forEach(ele => {
  
let delete__div = document.createElement('div');
let count__div = document.createElement('div');
delete__div.classList.add('Delete__row');
count__div.classList.add('Delete__row');
let Delete = document.createElement('button');

Delete.classList.add('btn', 'btn--small', 'btn--delete');
Delete.dataset.id = ele.id;
Delete.textContent = 'Delete';
    let li = document.createElement('li');
   li.addEventListener('click', this._moveMap.bind(this, ele))
   li.addEventListener('click', (e) => {deleteWorkout.call(this, e)})
    li.dataset.id = ele.id
    li.classList.add('workout');
    

    li.classList.add(`${ele.inputType === 'running'?'workout--running': 'workout--cycling' }`);
    li.innerHTML = ele.inputType === 'running'? runningWorkout(ele) : cyclingWorkout(ele);
    count__div.textContent = '777';
    delete__div.appendChild(Delete);
    delete__div.appendChild(count__div);
    
    li.appendChild(delete__div);
  
    
    df.prepend(li);
    
  
  });

  workoutsUL.replaceChildren(df);
  workoutsUL.prepend(form)
 
}

export { renderSideBar };
