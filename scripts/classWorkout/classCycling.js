import { Workout } from './classWorkout.js';



class Cycling extends Workout {
  constructor(props) {
    super(props);
    
      (this.cadence = props.cadence),
      (this.pace = props.pace);
  }
}


let testCyclingWorkout = new Cycling({
    id: 4321,
    date: new Date(),
    distance: '31km',
    duration: '10min',
    coords: { lat: 42.41161529314908, lng: -83.3028942346573 },
    name: 'wolf"s Cycling',
    cadence: '300spm',
    pace: '300mph'

  });

//   d(testCyclingWorkout);


let constructor = 'constructor';

export default constructor;
