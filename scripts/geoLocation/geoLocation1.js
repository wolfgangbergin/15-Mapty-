


navigator.geolocation
  ? navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        l(`https://www.google.com/maps/@${latitude},${longitude}`);
        const map = L.map('wolfMap').setView([latitude, longitude], 130);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.on('click', function (mapEvent) {
          form.classList.remove('hidden');
          inputDistance.focus();
         
        });
      },
      err => {
        l(err);
      }
    )
  : l('no geolocation');

form.addEventListener('submit', function (e) {
 let {lat, lng} = mapEvent.latlng
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

let constructor = 'constructor';

export default constructor;
