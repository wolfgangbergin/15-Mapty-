import { app } from "./classApp.js";


function moveMap(ele){
    l(ele.coords)
    const { lat, lng } = ele.coords;
    l(lat, lng )
    l(app._map.setView([lat, lng], 130))
}


export {moveMap}

  // this._map.setZoom(1);
  // this._map.setView([latitude, longitude], 5);  
 