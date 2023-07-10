import { month } from "./month.js";
function showForm(mapEvent) {
  l(form)
  form.classList.remove('hidden');
  inputDistance.focus();
  this._mapEvent = mapEvent;
}

const loadMap = function (position) {
  const { latitude, longitude } = position.coords;

  this._map.setView([latitude, longitude], 130);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this._map);

  this._map.on('click', showForm.bind(this));
  

  
};

let getPosition = function () {
  if (this._map) return;
  this._map = L.map('wolfMap');

  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(loadMap.bind(this), err => {
        l(err);
      })
    : l('no geolocation');

    return this._map;
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
