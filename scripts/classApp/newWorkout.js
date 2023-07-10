const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
import { marker } from "./marker.js";

const newWorkout = function(e){

  let tempObj ={}

    e.preventDefault();
    let {
      latlng: { lat, lng },
    } = this._mapEvent;



    if(inputType.value === 'running'){
      const cadence = +inputCadence.value;
      if(!Number.isFinite(cadence) || cadence < 0) return alert('please enter a positive number')
    }

    if(inputType.value === 'cycling'){
      const elevation = +inputElevation.value;
      if(!Number.isFinite(elevation)) return alert('please enter a  number')
    }
   
   if(inputDistance.value > 0 && inputDuration.value > 0){
   
 tempObj = {
  inputType: inputType.value, 
  id: Math.random(),
  // date: new Date(),
  dateS:  `${ month[new Date().getUTCMonth()] }  ${new Date().getDate()}` ,
  distance: +inputDistance.value,
  duration: +inputDuration.value,
  coords: { lat: lat, lng: lng },
  name: 'wolf"s run',
  cadence: +inputCadence.value,
  elevation: +inputElevation.value ,
  

}

} else {
  return alert('please enter a positive number')
}





// this._addWorkout(tempObj)

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
       313;

   // marker.call(this, tempObj)
  
    let temp = this.workouts
    temp.push(tempObj)
    this.workouts = temp;
   
   
    // L.marker([tempObj.coords.lat, tempObj.coords.lng])
    //   .addTo(this._map)
    //   .bindPopup(
    //     L.popup({
    //       maxWidth: 250,
    //       minWidth: 50,
    //       autoClose: false,
    //       closeOnClick: false,
    //       className: tempObj.inputType === 'running' ? 'running-popup' : 'cycling-popup'
          
    //     })
    //   )
    //   .setPopupContent(` ${inputType.value}  ${tempObj.dateS}`)
    //   .openPopup();

      form.classList.add('hidden');
  };

  export {newWorkout}