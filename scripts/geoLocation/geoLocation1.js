navigator.geolocation ?
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude, altitude } = position.coords;
      l(`https://www.google.com/maps/@${latitude},${longitude}`);
      const map = L.map('wolfMap').setView([latitude, longitude], 130);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.');
    },
    err => {
      l(err);
    }
  ) : l('no geolocation');



// d(globalThis)

//   e('errorMessage313')

// t('banana')

test1(wolf)
let constructor = 'constructor';

export default constructor;
