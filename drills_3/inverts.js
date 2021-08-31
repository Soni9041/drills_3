//const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function invert(obj) {
    var a={}
    for (var i in obj){
        a[obj[i]]=i;
    }
    return a;
}
//console.log(invert(testObject));    
module.exports ={invert};
