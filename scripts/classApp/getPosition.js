function showForm(mapEvent) {
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
  this._map = L.map('wolfMap');

  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(loadMap.bind(this), err => {
        l(err);
      })
    : l('no geolocation');
};


const newWorkout = function(e){
    
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

export { getPosition, newWorkout };
