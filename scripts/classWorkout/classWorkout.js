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
      (this.coords = props.coords),
    
      (this._clicksCount = 0),
      (this._wolfCount = 0),
      this.AAAwolfFunc =  'return this._wolfCount += this.distance'
      
  }
  
 
}



export { Workout };

let constructor = 'constructor';

export default constructor;
