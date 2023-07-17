'use strict';
Object.defineProperty(Object.prototype, 'addClicksCount', {
  value: function(){
this._clicksCount += 1;
  },
  writable: 0,
  configurable: 0,
  enumerable: 0,
});


Object.defineProperty(Window.prototype, 'l', {
  value: window.console.log,
  writable: 0,
  configurable: 0,
  enumerable: 0,
});

Object.defineProperty(Window.prototype, 'd', {
  value: window.console.dir,
  writable: 0,
  configurable: 0,
  enumerable: 0,
});

Object.defineProperty(Window.prototype, 'e', {
  value: window.console.error,
  writable: 0,
  configurable: 0,
  enumerable: 0,
});


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
