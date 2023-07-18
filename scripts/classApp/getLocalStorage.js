function getLocalStorage() {
    let storage = localStorage.getItem('workouts');
    if(!storage) return;
   
      this.workouts = JSON.parse(storage);

  }

  export { getLocalStorage };