import { Workout } from './classWorkout.js';



class Cycling extends Workout {
  _speed
  constructor(props) {
    super(props);
    
      (this.elevation = props.elevation)
      this.calcSpeed()
  }
  calcSpeed(){
    this._speed = this.distance * 10
    
  }
  get speed(){
    return this._speed
  }
}




// let testCyclingWorkout = new Cycling({
//     id: 4321,
//     date: new Date(),
//     distance: 300,
//     duration: 10,
//     coords: { lat: 42.41161529314908, lng: -83.3028942346573 },
//     name: 'wolf"s Cycling',
//     elevation: '300ft',
//     speed: '300mph'

//   });

  //d(testCyclingWorkout);

  export { Cycling };

let constructor = 'constructor';

export default constructor;
