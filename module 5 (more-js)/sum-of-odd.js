function sumOfOddNumber(numbers){
    let oddNumber = [];
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number % 2 == 1){
            oddNumber.push(number);
        }
    }
    return oddNumber;
}

let input = sumOfOddNumber([12, 23 ,34 ,45 ,56 , 567, 67, 101]);
console.log(input);