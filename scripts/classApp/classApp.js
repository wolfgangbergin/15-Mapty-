class App {
  constructor(props) {
    (this.workouts = props.workouts), this.map, this.tempCords;
  }

  _getPosition() {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;

            this.map = L.map('wolfMap').setView([latitude, longitude], 130);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            this._loadMap();
          },
          err => {
            l(err);
          }
        )
      : l('no geolocation');
  }
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
  _showFrom() {
    form.addEventListener(
      'submit',
      function (e) {
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
      }.bind(this)
    );
    this._toggleElevationField()
  }

  _toggleElevationField(){
    inputType.addEventListener('change', function () {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
      });
  }

  _newWorkout(){

  }
}

let wolfMan = new App({ workouts: [] });

wolfMan._getPosition();

let constructor = 'constructor';

export default constructor;
