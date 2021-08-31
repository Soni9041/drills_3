function value(obj) {
    var ab=[];
    for(var k in obj){
        ab.push(obj[k]);
    };
    return ab
};   
//console.log(key(testObject));
module.exports ={value};