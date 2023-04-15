function multiplication(numbers){
    let result = 1;
    for(let i = 1; i <= numbers; i++){
        result *= i;
    }
    return result;
}

let input = multiplication(5);
console.log(input);