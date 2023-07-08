
function marker(tempObj){

    L.marker([tempObj.coords.lat, tempObj.coords.lng])
    .addTo(this._map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: tempObj.inputType === 'running' ? 'running-popup' : 'cycling-popup',
        id: 'wolfgang'
      })
    )
    .setPopupContent(`wolf ${tempObj.inputType}  ${tempObj.dateS}`).openPopup();
    

    let kim = document.querySelector('.running-popup');
    l(kim)
  

}


export {marker}