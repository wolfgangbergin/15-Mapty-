import {Person} from './test3.js'
import { Animal } from "./test2.js";





class Boss extends Person{
    constructor(props){
        super(props)
        this.computer = props.computer
    }
}








let jojo = new Boss({age:16, name:'kim', computer: 'macBookPro', phone: '313-255-7102'})

//d(jojo.__proto__.__proto__.__proto__ === Person.prototype.__proto__)
//d(jojo.__proto__.__proto__.__proto__.__proto__ === Object.prototype)
//d(jojo.__proto__.__proto__.__proto__.__proto__.__proto__ === null)

//d(Boss.prototype.__proto__ === Person.prototype)

 
jojo.ageing().ageing().ageing().ageing().ageing().ageing()


d(jojo)
jojo.SetTestOne('test414')
let jojo2 = new Boss({age:16, name:'kim', computer: 'macBookPro', phone: '313-255-7102'})
d(jojo2)
let constructor = 'constructor';

export default constructor;