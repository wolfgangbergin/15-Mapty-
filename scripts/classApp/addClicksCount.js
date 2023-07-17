function addClicksCount(ele){
    
  
this.workouts.forEach((ele2) =>{
    
    if (ele2.id === ele.id) {
        ele2._clicksCount += 1;
        
    }})
 
 this.workouts = this.workouts
}




export { addClicksCount };