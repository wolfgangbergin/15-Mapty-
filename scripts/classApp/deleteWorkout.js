function deleteWorkout(e){
   
if (!(e.target.className === 'btn btn--small btn--delete')) return


l(+e.target.dataset.id)
l(this.workouts)

let temp = this.workouts

 let kim = this.workouts.filter((obj)=>obj.id !== +e.target.dataset.id)

this.workouts = kim

}

export {deleteWorkout}