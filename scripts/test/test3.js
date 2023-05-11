import { Animal } from "./test2.js";




function Person(props){

  
    // Person.prototype.__proto__ = Animal.prototype
//Object.setPrototypeOf(Person.prototype, Animal.prototype)
    Animal.call(this, props)
    this.name =  props.name;
    this.business = Animal.prop2
}
Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person


export {Person} 


let constructor = 'constructor';

export default constructor;
