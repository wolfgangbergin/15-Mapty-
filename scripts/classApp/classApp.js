import { getPosition, toggleElevationField } from './classAppHelper1.js';
import { newWorkout } from './newWorkout.js';
import { addWorkout } from './addWorkout.js';
 import {moveMap} from './moveMap.js';


class App {
  _map;
  _mapEvent;
  constructor(props) {
    this.workouts = [];
  
    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    moveMap.call(this);
  }

  _newWorkout = newWorkout;

  _toggleElevationField = toggleElevationField;

  _addWorkout = addWorkout;

  //  _moveMap = moveMap;


  
}
let app = new App();

// app._moveMap();
let constructor = 'constructor';

export default constructor;
