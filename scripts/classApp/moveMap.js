


function moveMap(ele){
    
    const { lat, lng } = ele.coords;
   
    this._map.setView([lat, lng], 130);
}


export {moveMap}


 