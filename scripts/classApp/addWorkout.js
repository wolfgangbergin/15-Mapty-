import { Running } from '../classWorkout/classRunning.js';
import { Cycling } from '../classWorkout/classCycling.js';
import { renderSideBar } from './renderSideBar.js';
function addWorkout(param) {
  let tempObj;
  param.inputType === 'running' && (tempObj = new Running(param));
  param.inputType === 'cycling' && (tempObj = new Cycling(param));

  this._workouts.push(tempObj);


  localStorage.setItem('workouts', JSON.stringify(this._workouts));

  renderSideBar.call(this);
}

export { addWorkout };
