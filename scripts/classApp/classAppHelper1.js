import { month } from "./month.js";
function showForm(mapEvent) {
  form.classList.remove('hidden');
  inputDistance.focus();
  this._mapEvent = mapEvent;
}

const loadMap = function (position) {
  const { latitude, longitude } = position.coords;
l(latitude, longitude )
  this._map.setView([latitude, longitude], 130);
  // this._map.setView([42.411742320493495, -86.50289123983067], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this._map);

  this._map.on('click', showForm.bind(this));
};

let getPosition = function () {
   this._map = L.map('wolfMap');

  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(loadMap.bind(this), err => {
        l(err);
      })
    : l('no geolocation');
};




  function toggleElevationField() {
  if (inputType.value === 'running'){
    inputElevation.closest('.form__row').classList.add('form__row--hidden');
    inputCadence.closest('.form__row').classList.remove('form__row--hidden');
  } 
  if (inputType.value === 'cycling'){
    inputElevation.closest('.form__row').classList.remove('form__row--hidden');
    inputCadence.closest('.form__row').classList.add('form__row--hidden');
  }

  
   
  }

export { getPosition,  toggleElevationField };
