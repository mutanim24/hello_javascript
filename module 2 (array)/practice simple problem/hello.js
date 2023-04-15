// // result find by condition
// var totalMarks = 16;
// if(totalMarks >= 80){
//     console.log("A+")
// }
// else if(totalMarks >= 70){
//     console.log("A")
// }
// else if(totalMarks >= 60){
//     console.log("A-")
// }
// else if(totalMarks >= 50){
//     console.log("B")
// }
// else{
//     console.log("fail")
// }


// //biggest number findout
// var num1 = 2;
// var num2 = 1002;
// var num3 = 1002;

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log("num1 is biggest number")
//     }

// }
// else if (num2 > num3) {
//     console.log("num2 is biggest number")
// }
// else {
//     console.log("num3 is biggest number")
// }


// // Isosceles triangle define
// var line1 = 12;
// var line2 = 13;
// var line3 = 14;
// if (line1 == line2 || line1 == line3 || line2 == line3) {
//     console.log("Isosceles triangle")
// }
// else {
//     console.log("just a triangle")
// }



//chat GPT
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    }
}
let triangle = new Triangle(19, 2, 5);
console.log("Perimeter: " + triangle.getPerimeter());
console.log("Area: " + triangle.getArea());
