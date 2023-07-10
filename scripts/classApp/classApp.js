import { getPosition, toggleElevationField } from './classAppHelper1.js';
import { newWorkout } from './newWorkout.js';
import { addWorkout } from './addWorkout.js';
import { renderSideBar } from './renderSideBar.js';
import {marker} from  './marker.js'
import { deleteWorkout } from "./deleteWorkout.js";

function getLocalStorage() {
  let storage = localStorage.getItem('workouts');
  if (storage) {
    this.workouts = JSON.parse(storage);
    
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

 _deleteWorkout = deleteWorkout.bind(this);

  _newWorkout = newWorkout;

  _toggleElevationField = toggleElevationField;

  _addWorkout = addWorkout;

  _getLocalStorage = getLocalStorage;

  get workouts(){
    return this._workouts
  }


set workouts(param){

  this._workouts = param
  renderSideBar.call(this);
  
  this._map.whenReady(() => { this.workouts.forEach(obj=>{

    marker.call(this, obj);

    getPosition.call(this);
    }) });



};

  
}

let app = new App();



 app._getLocalStorage();





let constructor = 'constructor';


export default constructor;


export {app}
