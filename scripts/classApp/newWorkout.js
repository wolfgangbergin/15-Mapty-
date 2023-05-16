const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const newWorkout = function(e){
    
    e.preventDefault();
    let {
      latlng: { lat, lng },
    } = this._mapEvent;
 const tempObj = {
  inputType: inputType.value, 
  id: Math.random(),
  date: new Date(),
  distance: inputDistance.value,
  duration: inputDuration.value,
  coords: { lat: lat, lng: lng },
  name: 'wolf"s run',
  cadence: inputCadence.value,
  elevation: inputElevation.value ,
 }


this._addWorkout(tempObj)

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

  
    L.marker([lat, lng])
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: inputType.value === 'running' ? 'running-popup' : 'cycling-popup'
          
        })
      )
      .setPopupContent(` ${inputType.value} ${month[tempObj.date.getUTCMonth()]} ${tempObj.date.getDay()}`)
      .openPopup();

      form.classList.add('hidden');
  };

  export {newWorkout}