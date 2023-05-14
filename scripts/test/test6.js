
let kim = {
    fName: 'kim313',
    getFName: function(){
        return this.fName
    }
}

let wolf = {
    fName: 'wolf313'
}

wolf.getFName = kim.getFName

l(kim.getFName())
l(wolf.getFName())

let constructor = 'constructor';

export default constructor;
