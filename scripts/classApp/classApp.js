import { getPosition } from '../classWorkout/getPosition.js';
class App {
  _map;
  #mapEvent;
  constructor(props) {
    this.workouts = props.workouts;

    this._getPosition();

    this._showFrom();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition = getPosition;

  _showFrom() {
    this._map.on('click', mapEvent => {
      form.classList.remove('hidden');
      inputDistance.focus();
      this.#mapEvent = mapEvent;
    });
  }
  _newWorkout(e) {
    l(this)
    e.preventDefault();
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    let {
      latlng: { lat, lng },
    } = this.#mapEvent;
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
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  
}
let app = new App({ workouts: [] });

let constructor = 'constructor';

export default constructor;
