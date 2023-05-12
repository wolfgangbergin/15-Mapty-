import { Person } from './test3.js';
import { Animal } from './test2.js';

class Boss extends Person {
  constructor(props) {
    super(props);
    this.computer = props.computer;
    let redford = '48240';
    this.redMeth =  () =>{
      let temp = 'temp';
      l(redford);
      l(this);
      debugger;
      return redford
    };
  }
}

let jojo = new Boss({
  age: 16,
  name: 'kim',
  computer: 'macBookPro',
  phone: '313-255-7102',
});

//d(jojo.__proto__.__proto__.__proto__ === Person.prototype.__proto__)
//d(jojo.__proto__.__proto__.__proto__.__proto__ === Object.prototype)
//d(jojo.__proto__.__proto__.__proto__.__proto__.__proto__ === null)

//d(Boss.prototype.__proto__ === Person.prototype)

d(jojo);
const wolfFunc = function (param1) {
  let redford = '313';
  jojo.redMeth();
};
wolfFunc();

let constructor = 'constructor';

export default constructor;
