import { month } from "./month.js";
const cyclingWorkout = ele =>  `<h2 class="workout__title"> ${ele.inputType}
${ ele.dateS}  
</h2>
<div class="workout__details">
  <span class="workout__icon">🚴‍♀️</span>
  <span class="workout__value">${ele.distance}</span>
  <span class="workout__unit">km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⏱</span>
  <span class="workout__value">${ele.duration}</span>
  <span class="workout__unit">min</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${ele.wSpeed}</span>
  <span class="workout__unit">km/h</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⛰</span>
  <span class="workout__value">${ele.elevation}</span>
  <span class="workout__unit">M</span>
</div>
`

  export {cyclingWorkout}


  