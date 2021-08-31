const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; //= { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const f1 = require('../values');
const result=f1.value(testObject);
console.log(result)