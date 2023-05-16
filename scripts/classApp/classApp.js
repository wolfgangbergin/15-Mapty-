import { getPosition, newWorkout }from './getPosition.js';
import { Running } from '../classWorkout/classRunning.js';
import { Cycling } from '../classWorkout/classCycling.js';

class App {
  _map;
  _mapEvent;
  constructor(props) {
    this.workouts = props.workouts;
    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _newWorkout = newWorkout

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
 _addWorkout(param){
  l(param)
const tempWorkout ={}

 }

}
let app = new App({ workouts: [] });

let constructor = 'constructor';

export default constructor;
