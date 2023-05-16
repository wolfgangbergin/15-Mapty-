function renderSideBar(workoutsArr) {
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form')

  let df = new DocumentFragment();
  workoutsArr.forEach(ele => {
    let li = document.createElement('li');
    li.textContent = ele.inputType;
    
 

    df.prepend(form)
    df.appendChild(li);
  });
 workoutsUL.replaceChildren(df)
  l(workoutsUL)
}

export { renderSideBar };
