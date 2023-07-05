function marker(tempObj){

    L.marker([tempObj.coords.lat, tempObj.coords.lng])
    .addTo(this._map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: tempObj.inputType === 'running' ? 'running-popup' : 'cycling-popup'
        
      })
    )
    .setPopupContent(` ${inputType.value}  ${tempObj.dateS}`)
    .openPopup();

}


export {marker}