let moveMap = function () {
   
 
    this._map.setView([42.411742320493495, -83.50289123983067], 10);

    this._map.on('click', function (mapEvent) {
        l(this._map);
    }.bind(this));
}


export  {moveMap};