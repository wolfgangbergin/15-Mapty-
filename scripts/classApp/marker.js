
function marker(tempObj, layerGroup){

  


    L.marker([tempObj.coords.lat, tempObj.coords.lng])
    .addTo(layerGroup)
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
    

   
   

}


export {marker}