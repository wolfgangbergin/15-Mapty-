import { getPosition, toggleElevationField } from './classAppHelper1.js';
import { newWorkout } from './newWorkout.js';
import { addWorkout } from './addWorkout.js';
import { renderSideBar } from './renderSideBar.js';
 
function getLocalStorage() {
  let storage = localStorage.getItem('workouts');
  if (storage) {
    this.workouts = JSON.parse(storage);
    renderSideBar(this._workouts);
  }
}

class App {
  _map;
  _mapEvent;
  _workouts;
  constructor(props) {
    this._workouts = [];
  
    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);

  }

  _newWorkout = newWorkout;

  _toggleElevationField = toggleElevationField;

  _addWorkout = addWorkout;

  _getLocalStorage = getLocalStorage;
  get workouts(){
    return this._workouts
  }


set workouts(param){
  this._workouts = param

};

  
}

let app = new App();
 app._getLocalStorage();



let constructor = 'constructor';


export default constructor;


export {app}
