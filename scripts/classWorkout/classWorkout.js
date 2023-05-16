class Workout {
  date = new Date()
  id = Math.random()
  constructor(props) {
    (this.name = props.name),
    
      (this.distance = props.distance),
      (this.duration = props.duration),
      (this.coords = props.coords)
      
  }
}

export { Workout };

let constructor = 'constructor';

export default constructor;
