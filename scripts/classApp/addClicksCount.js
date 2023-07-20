function addClicksCount(ele){
    
  
this.workouts.forEach((ele2) =>{
    
    if (ele2.id === ele.id) {
        ele2.addClicksCount();
        let kim = new Function('a', ele2.AAAwolfFunc)
      
        kim.call(ele2, ele2.distance)
        
    }})
 
 this.workouts = this.workouts
}




export { addClicksCount };