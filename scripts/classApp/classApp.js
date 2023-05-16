import { getPosition } from './getPosition.js';
import { Running } from '../classWorkout/classRunning.js';
import { Cycling } from '../classWorkout/classCycling.js';

class App {
  _map;
  _mapEvent;
  constructor(props) {
    this.workouts = props.workouts;
    getPosition.call(this);
    form.addEventListener('submit', this._newWorkout);
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _newWorkout = e => {
    
    e.preventDefault();
    let {
      latlng: { lat, lng },
    } = this._mapEvent;
 const tempObj = {
  inputType: inputType.value, 
  id: Math.random(),
  date: new Date(),
  distance: inputDistance.value,
  duration: inputDuration.value,
  coords: { lat: lat, lng: lng },
  name: 'wolf"s run',
  cadence: inputCadence.value,
  elevation: inputElevation.value ,
 }


this._addWorkout(tempObj)

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

  
    L.marker([lat, lng])
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();


  };

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
