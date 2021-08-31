function cb(value){
    return value;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; //= { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const f1 = require('../mapobjects');
const result=f1.mapObject(testObject,cb);
console.log(result)
