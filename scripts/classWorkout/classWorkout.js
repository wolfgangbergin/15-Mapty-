class Workout {
  date = new Date()
  id = Math.random()
  dateS
  constructor(props) {
    (this.inputType = props.inputType),
    (this.name = props.name),
    (this.dateS = props.dateS),
      (this.distance = props.distance),
      (this.duration = props.duration),
      (this.coords = props.coords)
      
  }
}

export { Workout };

let constructor = 'constructor';

export default constructor;
