import { addClicksCount } from "./addClicksCount.js";
function moveMap(ele) {
  const { lat, lng } = ele.coords;
 
  addClicksCount.call(this, ele)

  this._map.setView([lat, lng], this.zoomLevel, {
    animate: true,
    pan: {
      duration: 2,
    },
  });
}

export { moveMap };


//June2012