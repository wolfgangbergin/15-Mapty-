let kim = function(){
    l(.2)
}

let wolfFunc = function(){
    kim()
    l(.1)
    
}

const loadMap = function(position){
   
    l(2)
    const { latitude, longitude } = position.coords;

    this._map.setView([latitude, longitude], 130);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);
   
   
   
  }
 
 let  getPosition = function() {
    wolfFunc();
    this._map = L.map('wolfMap')
    
   
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
     
      loadMap.bind(this, ),
          err => {
            l(err);
          }
        )
      : l('no geolocation');
      l(1)
  }




export {getPosition, loadMap, wolfFunc}