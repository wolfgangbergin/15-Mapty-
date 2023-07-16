function moveMap(ele) {
  const { lat, lng } = ele.coords;
l(this)
  this._map.setView([lat, lng], this.zoomLevel, {
    animate: true,
    pan: {
      duration: 2,
    },
  });
}

export { moveMap };


//June2012