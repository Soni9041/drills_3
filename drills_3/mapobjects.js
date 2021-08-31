function mapObject(obj,cb) {
    var ar=[];
    for (var val in obj){
        ar.push(cb(obj[val]));
    }
    return ar;
}
module.exports={mapObject};