import { Workout } from './classWorkout.js';



class Running extends Workout {
 
  _pace
 
  constructor(props) {
    super(props);
    
      (this.cadence = props.cadence)
      this.calcPace()
      this.wPace =   this.calcPace()
      
  }

  calcPace(){
    return this.distance * 10
    
  }
  get pace(){
    return this._pace
  }
}


// let testRunWorkout = new Running({
//     id: 1234,
//     date: new Date(),
//     distance: 10,
//     duration: 2,
//     coords: { lat: 42.41161529314908, lng: -83.3028942346573 },
//     name: 'wolf"s run',
//     cadence: '3spm',
    

//   });

  // d(testRunWorkout);

export { Running };


let constructor = 'constructor';

export default constructor;
