import { getPosition, loadMap } from '../classWorkout/getPosition.js';
class App {
    _map
    #mapEvent
  constructor(props) {
    (this.workouts = props.workouts)
    this._getPosition();
    
  }
  
  _getPosition = getPosition;

  _showFrom() {
    this._map.on(
      'click',
     (mapEvent)=> {
        form.classList.remove('hidden');
        inputDistance.focus();
        this.#mapEvent = mapEvent;
      }
    );
    this._submitForm();
  }
  _submitForm() {
    form.addEventListener('submit', e => {
      e.preventDefault();
      inputDistance.value =
        inputDuration.value =
        inputCadence.value =
        inputElevation.value =
          '';

      let { latlng: {lat, lng} } = this.#mapEvent;
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
    });
    this._toggleElevationField();
  }

  _toggleElevationField() {
    inputType.addEventListener('change', function () {
      inputElevation
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    });
  }

  _newWorkout() {}
}
let app = new App({ workouts: [] });


let constructor = 'constructor';

export default constructor;
