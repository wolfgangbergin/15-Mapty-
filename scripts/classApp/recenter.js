// let tempCords = [
//   [42.41092308436314, -83.30192734669055],
//   [46.02851982368131, -87.40619137417148],
//   [ 33.58818317455442,  -117.86116809588643]
// ];

let recenterFunc = function () {
    let tempCords = [];
    this.workouts.forEach(obj => {
       let temp = [];
       temp.push(obj.coords.lat);
       temp.push(obj.coords.lng);
         tempCords.push(temp);
    });

 if (tempCords.length === 0) return;
  this._map.fitBounds(tempCords);
};

export default recenterFunc;
