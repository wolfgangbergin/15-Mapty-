 let  getPosition = function() {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          position => {
            l(this)
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


export {getPosition}