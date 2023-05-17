import { Workout } from './classWorkout.js';



class Running extends Workout {
  _wolf = 'wolf'
  #pace
  constructor(props) {
    super(props);
    
      (this.cadence = props.cadence)
      this.calcPace()
  }

  calcPace(){
    this.#pace = this.distance / this.duration + ' mph'
    return this.#pace
  }
  get pace(){
    return this.#pace
  }
}


let testRunWorkout = new Running({
    id: 1234,
    date: new Date(),
    distance: 10,
    duration: 2,
    coords: { lat: 42.41161529314908, lng: -83.3028942346573 },
    name: 'wolf"s run',
    cadence: '3spm',
    

  });

  // d(testRunWorkout);

export { Running };


let constructor = 'constructor';

export default constructor;
