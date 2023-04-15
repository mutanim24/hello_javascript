// // select few number from array
// const numbers = [12, 23, 45, 89, 67, 23, 34, 45, 6];
// //select number from middle of the array
// console.log(numbers.slice(1, 4));
// console.log(numbers);

// //select number and remove from main array which is selected
// console.log(numbers.splice(1, 4));
// console.log(numbers);

//remove and add new element in array
const numbers2 = [12, 100, 200, 87, 45, 56]
console.log(numbers2);
const splice = numbers2.splice(1, 2, 999, 999);  //remove 1 from 2 no index number and push here:- 999, 999
console.log(splice)
console.log(numbers2);
