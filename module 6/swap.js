//approch 1
let num1 = 12;
let num2 = 122;
console.log(num1, num2);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

//approch 2
let num3 = 100;
let num4 = 200;
console.log(num3, num4);
[num3, num4] = [num4, num3];
console.log(num3, num4);