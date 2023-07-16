import { getPosition, toggleElevationField } from './classAppHelper1.js';
import { newWorkout } from './newWorkout.js';
import { addWorkout } from './addWorkout.js';
import { renderSideBar } from './renderSideBar.js';
import { marker } from './marker.js';
import { deleteWorkout } from './deleteWorkout.js';
import { moveMap } from './moveMap.js';

function getLocalStorage() {
  let storage = localStorage.getItem('workouts');
  if (storage) {
    this.workouts = JSON.parse(storage);
  }
}

class App {
  layerGroup;
  _map;
  _mapEvent;
  #workouts;
  #zoomLevel = 13;
  constructor(props) {
    this.count = 1;

    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);

    this.layerGroup = L.layerGroup().addTo(this._map);
  }

  _deleteWorkout = deleteWorkout.bind(this);

  _newWorkout = newWorkout;

  _toggleElevationField = toggleElevationField;

  _addWorkout = addWorkout;

  _getLocalStorage = getLocalStorage;

  _moveMap = moveMap;

  get zoomLevel() {
    return this.#zoomLevel;
  }

  get workouts() {
    return this.#workouts;
  }

  set workouts(param) {
    l(param);

    this.layerGroup.clearLayers();
    this.#workouts = param;

    renderSideBar.call(this);

    this._map.whenReady(() => {
      this.workouts.forEach(obj => {
        marker.call(this, obj);

        getPosition.call(this);
      });
    });

    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
}

let app = new App();

app._getLocalStorage();

let constructor = 'constructor';

export default constructor;

export { app };
