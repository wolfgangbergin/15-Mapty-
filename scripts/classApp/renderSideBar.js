import { month } from "./month.js";

function renderSideBar(workoutsArr) {
  const workoutsUL = document.querySelector('.workouts');
  let form = document.querySelector('form');

  let df = new DocumentFragment();
  workoutsArr.forEach(ele => {
    l(ele);
    let li = document.createElement('li');
    li.classList.add('workout');
    li.classList.add('workout--running');
    li.innerHTML = `<h2 class="workout__title"> ${ele.inputType} ${
      month[ele.date.getUTCMonth()]
    } ${ele.date.getDay()}</h2>
    <div class="workout__details">
      <span class="workout__icon">🏃‍♂️</span>
      <span class="workout__value">${'wolf'}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">24</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">4.6</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">178</span>
      <span class="workout__unit">spm</span>
    </div>`;

    df.prepend(form);
    df.appendChild(li);
  });
  workoutsUL.replaceChildren(df);
  l(workoutsUL);
}

export { renderSideBar };
