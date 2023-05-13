import { Workout } from './classWorkout.js';



class Running extends Workout {
  constructor(props) {
    super(props);
    
      (this.cadence = props.cadence),
      (this.pace = props.pace);
  }
}


let testRunWorkout = new Running({
    id: 1234,
    date: new Date(),
    distance: '31 blocks',
    duration: '10min',
    coords: { lat: 42.41161529314908, lng: -83.3028942346573 },
    name: 'wolf"s run',
    cadence: '3spm',
    pace: '3mph'

  });

  d(testRunWorkout);


let constructor = 'constructor';

export default constructor;
