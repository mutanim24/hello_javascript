function someOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        sum = sum + number;
    }
    return sum;
}

// someOfArray([12, 3, 43, 33, 45, 100, 200]);
const myNumbers = [12, 3, 43, 33, 45, 100, 200];
const sendNumbers = someOfArray(myNumbers);
console.log(sendNumbers);