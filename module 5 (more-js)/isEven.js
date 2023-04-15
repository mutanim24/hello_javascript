function isEven(number){
    let remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

let myNumber = isEven(3278648275);
console.log(myNumber);
let herNumber = isEven(8743298360);
console.log(herNumber);