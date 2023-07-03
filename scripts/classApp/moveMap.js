import { app } from "./classApp.js";


function moveMap(ele){
    
    const { lat, lng } = ele.coords;
   
    app._map.setView([lat, lng], 130);
}


export {moveMap}

  // this._map.setZoom(1);
  // this._map.setView([latitude, longitude], 5);  
 