var myMobile = {
    brand: "vivo", 
    price: 12000,
    color: "blue",
    from: "china",
    ram: 2
}

// different type of output for obj
var property = myMobile.brand;
console.log(property);
var property2 = myMobile['price'];
console.log(property2);
var objKey = "from";
console.log(myMobile[objKey]);

// set new obj value
myMobile.ram = 8;
console.log(myMobile);
var phnColor = "color"; 
myMobile[phnColor] = 'red';
console.log(myMobile[phnColor]);




