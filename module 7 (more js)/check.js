function add(num1, num2){
    // console.log(typeof num1);
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("type a number plz")
    }
    else{
        return num1 + num2;
    }
}

console.log(add(12, "13"));