function moveMap(ele) {
  const { lat, lng } = ele.coords;

  this._map.setView([lat, lng], this.zoomLevel, {
    animate: true,
    pan: {
      duration: 2,
    },
  });
}

export { moveMap };
