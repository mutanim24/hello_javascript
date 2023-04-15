function sumOfFactorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result *= i;
    }
    return result;
}

let inputNumber = sumOfFactorial(5);
console.log(inputNumber);

//by while
function sumByWhile(number){
    let result = 1;
    let i = 5;
    while(i >= 1){
        result = result * i ;
        i--;
    }
    return result;
}

let input2 = sumByWhile(5);
console.log(input2);