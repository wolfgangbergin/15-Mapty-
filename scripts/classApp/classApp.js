import { getPosition } from '../classWorkout/getPosition.js';
class App {
  constructor(props) {
    (this.workouts = props.workouts), this.map, this.tempCords;
  }
  _getPosition = getPosition;
  _loadMap() {
    this.map.on(
      'click',
      function (mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();
        this.tempCords = mapEvent.latlng;
      }.bind(this)
    );
    this._showFrom();
  }

  _wolfMeth() {
    this.map.on(
      'click',
      function (mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();
        this.tempCords = mapEvent.latlng;
      }.bind(this)
    );
    this._showFrom();
  }
  _showFrom() {
    form.addEventListener(
      'submit',
       (e)=> {
        e.preventDefault();
        inputDistance.value =
          inputDuration.value =
          inputCadence.value =
          inputElevation.value =
            '';

        let { lat, lng } = this.tempCords;
        L.marker([lat, lng])
          .addTo(this.map)
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
    );
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
let wolfMan = new App({ workouts: [] });
wolfMan._getPosition();

let constructor = 'constructor';

export default constructor;
