const target = {
  name: 'Тимофей' // enumarable: true, writable: true, configutable: true
};

Object.defineProperty(target, 'name', {
  valuse: 'Тимофей',
  //get() {},
  //set(y) {},
  enumerable: false,
  writable: false,
})

// enumarable: false
Object.keys(target); // []
// enumarable: true
Object.keys(target);

//writable: false
target.name = 'Василий'
console.log(target.name);

//configurable: false
// TypeError: Cannot redefine prorepty: name
Object.defineProperty(target, 'name', {
  value: 'Тимофей',
  enumerable: true,
})
