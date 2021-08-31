const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; //= { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const f1 = require('../inverts');
const result=f1.invert(testObject);
console.log(result)