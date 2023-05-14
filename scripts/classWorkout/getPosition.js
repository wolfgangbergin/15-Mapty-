const loadMap = function(position){
    l(this)
    const { latitude, longitude } = position.coords;

    this._map = L.map('wolfMap').setView([latitude, longitude], 130);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    this._showFrom();
  }
 
 let  getPosition = function() {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
      loadMap.bind(this, ),
          err => {
            l(err);
          }
        )
      : l('no geolocation');
  }


export {getPosition, loadMap}