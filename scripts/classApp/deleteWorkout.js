function deleteWorkout(e){
 
if (!(e.target.className === 'btn btn--small btn--delete')) return


 l(+e.target.dataset.id)



 let kim = this.workouts.filter((obj)=>obj.id !== +e.target.dataset.id)

 this.workouts = kim

}

export {deleteWorkout}