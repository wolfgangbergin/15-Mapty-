import { Running } from '../classWorkout/classRunning.js';
import { Cycling } from '../classWorkout/classCycling.js';
function addWorkout(param) {
    let tempObj;
    param.inputType === 'running' && (tempObj = new Running(param));
    param.inputType === 'cycling' && (tempObj = new Cycling(param));

   
 this.workouts.push(tempObj)

  }

  export {addWorkout}