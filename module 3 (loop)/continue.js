// for(var i = 0; i < 10; i++){
    
//     if(i > 5){
//         continue;
//     }
//     console.log(i);
// }



var numbers = [12, 34, 45, 56, 76, 67, 78, 1, 100]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}