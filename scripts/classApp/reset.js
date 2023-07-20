





let reset = document.querySelector('.reset__button');




reset.addEventListener('click', () => {
    localStorage.removeItem('workouts');
  
    location.reload();
})



















export default 'reset' ;