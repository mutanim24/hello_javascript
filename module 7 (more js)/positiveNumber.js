function findPositiveNumber(numbers){
    let positive = [];
    for(const number of numbers){
        if(number >= 0){
            positive.push(number);
        }
        else{
            break;
        }

    } 
    return positive;
}

const numbers = [12, 3, 0, 45, 56, 34, 4, -56, 34];
const result = findPositiveNumber(numbers);
console.log(result);