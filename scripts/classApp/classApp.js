import { getPosition, toggleElevationField } from './classAppHelper1.js';

import { newWorkout } from './newWorkout.js';
import { addWorkout } from './addWorkout.js';

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

  _addWorkout = addWorkout;

  //_renderSideBar = renderSideBar;
}
let app = new App();

let constructor = 'constructor';

export default constructor;
