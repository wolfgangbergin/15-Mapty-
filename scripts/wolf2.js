'use strict';



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


this.__proto__.t = (param1) => {
  l(`test: ${param1}`);
  return param1;
}

this.__proto__.wolf = 'wolf313';