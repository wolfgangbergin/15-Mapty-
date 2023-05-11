let test1 = 'test313'




let protoOrg ={

     SetTestOne: (param1)=>{
        test1 = param1
     },
    initProtoOrg: function(props){
      
        this._age = 99
        this.test1 = test1

    },

    ageing: function(){
        this._age++
        return this
    },

    returnAge(){
        return _age
    }
}


// let newOrg = Object.create(protoOrg)

// newOrg.initProtoOrg({age: 48})

// d(newOrg)




export {protoOrg}
const sctipts = 'scripsting'
export default sctipts