import {
  getPosition,
 
  toggleElevationField,
} from './classApp2.js';
import { Running } from '../classWorkout/classRunning.js';
import { Cycling } from '../classWorkout/classCycling.js';
import { newWorkout } from './newWorkout.js';

class App {
  _map;
  _mapEvent;
  constructor(props) {
    this.workouts = [];
    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _newWorkout = newWorkout;

  _toggleElevationField = toggleElevationField;

  _addWorkout(param) {
    let tempObj;
    param.inputType === 'running' && (tempObj = new Running(param));
    param.inputType === 'cycling' && (tempObj = new Cycling(param));

   
 this.workouts.push(tempObj)

  }
}
let app = new App();

let constructor = 'constructor';

export default constructor;
