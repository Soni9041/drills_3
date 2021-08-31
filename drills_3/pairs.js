function pair(obj) {
    var ab=[];
    for(var k in obj){
        ab.push(k,obj[k]);
    };
    return ab
};   
//console.log(key(testObject));
module.exports ={pair};