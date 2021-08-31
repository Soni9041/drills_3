//const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; //= { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function key(obj) {
    var ab=[];
    for(var k in obj){
        ab.push(k);
    };
    return ab
};   
//console.log(key(testObject));
module.exports ={key};
