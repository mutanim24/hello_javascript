var myMobile = {
    brand: "vivo", 
    price: 12000,
    color: "blue",
    from: "china",
    ram: 2
}

var keys = Object.keys(myMobile);
var values = Object.values(myMobile);
for(var i = 0; i < keys.length; i++){
    var propName = keys[i];
    var propValue = values[i];
    console.log(propName, "=", propValue)
}
// console.log(keys, values);