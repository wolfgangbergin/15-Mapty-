


class App{
    constructor(props){
        this.workouts = props.workouts,
        this.map,
        this.tempCords = {},
        this.wolf = 'wolf'
    }

    _getPosition(){
        navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
      
             
              this.map = L.map('wolfMap').setView([latitude, longitude], 130);
      
              L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              }).addTo(this.map );
      
              this.map.on('click', function (mapEvent) {
                
                form.classList.remove('hidden');
                inputDistance.focus();
                this.tempCords = mapEvent.latlng
               
              }.bind(this));
            },
            err => {
              l(err);
            }
          )
        : l('no geolocation');
    }
    _showFrom(){
        
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            inputDistance.value = inputDuration.value =  inputCadence.value = inputElevation.value = '';
            
           let {lat, lng} = this.tempCords
                    L.marker([lat, lng])
                    .addTo(this.map)
                    .bindPopup(L.popup({
                      maxWidth: 250,
                      minWidth: 100,
                      autoClose: false,
                      closeOnClick: false,
                      className: 'running-popup',
                    })).setPopupContent('Workout').openPopup()
                   
          }.bind(this));

    }
}



let wolfMan = new App({workouts: []})

wolfMan._getPosition()

wolfMan._showFrom()

let constructor = 'constructor';

export default constructor;