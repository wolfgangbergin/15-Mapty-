





let reset = document.querySelector('.reset__button');




reset.addEventListener('click', () => {
    localStorage.removeItem('workouts');
  alert('All workouts have been deleted. Please refresh the page.');
    location.reload();
})



















export default 'reset' ;