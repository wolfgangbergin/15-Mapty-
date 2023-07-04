function marker(tempObj){
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
      .setPopupContent(` ${inputType.value}  ${tempObj.dateS}`)
      .openPopup();
}


export {marker}