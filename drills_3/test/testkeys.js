const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; //= { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const f1 = require('../keys');
const result=f1.key(testObject);
console.log(result)