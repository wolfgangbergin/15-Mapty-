

const loadMap = function (position) {
  const { latitude, longitude } = position.coords;

  this._map.setView([latitude, longitude], 130);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this._map);

  this._map.on('click', mapEvent => {
    form.classList.remove('hidden');
    inputDistance.focus();
    this._mapEvent = mapEvent;
  });
};

let getPosition = function () {
  l(this);
  this._map = L.map('wolfMap');

  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(loadMap.bind(this), err => {
        l(err);
      })
    : l('no geolocation');
};




export { getPosition };
