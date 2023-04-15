function sumNumber(numbers){
    let summation = 0;
    for(let i = 0; i <= numbers; i++){
        summation += i;
    }
    return summation;
}

let result = sumNumber(5);
console.log(result);