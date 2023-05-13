
//wolftest
let map;
let tempCords;


navigator.geolocation
  ? navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        l(`https://www.google.com/maps/@${latitude},${longitude}`);
        map = L.map('wolfMap').setView([latitude, longitude], 130);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.on('click', function (mapEvent) {
          form.classList.remove('hidden');
          inputDistance.focus();
          tempCords = mapEvent.latlng
        });
      },
      err => {
        l(err);
      }
    )
  : l('no geolocation');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  inputDistance.value = inputDuration.value =  inputCadence.value = inputElevation.value = '';
 let {lat, lng} = tempCords
          L.marker([lat, lng])
          .addTo(map)
          .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })).setPopupContent('Workout').openPopup()
         
});


inputType.addEventListener('change', function () {
  l('change');
  //inputDistance.classList.toggle('form__input--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

let constructor = 'constructor';

export default constructor;
