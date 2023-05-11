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
