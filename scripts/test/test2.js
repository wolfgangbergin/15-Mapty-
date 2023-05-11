import { protoOrg } from "./test1.js";


let Public = '919'
const Animal = function(props){
  Object.setPrototypeOf(Animal.prototype, protoOrg)

    let PrivateOne
   
    Animal.meth1 = (param1)=>{
        PrivateOne = param1
        return PrivateOne
    }

   Animal.meth1(props.phone)
    Animal.prop2 = 'action building'
    this.initProtoOrg(props)
    this.Public = Public
    this.PrivateOne = PrivateOne
 
    this.fFood = Animal.fFood
    
};


Object.defineProperties(Animal.prototype, {
    business: {
      get:function(){
        return this._business
      },

      set:function(param1){
       
        this._business = param1
      }    
    },
    AAAproperty22: {
        value: 22,
        writable: true
      },
  });
  

Animal.prototype.prototypeLog = function() {
    l('Aminal.prototypeLog.wolfLog')
};

Animal.fFoodMeth = function(param1){
    this.fFood =param1

}
 
Animal.fFoodMeth('apple')










export {Animal};

let constructor = 'constructor';

export default constructor;
