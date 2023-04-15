const jim = 98;
const kamrul = 88;
const emon = 165;

function getMax(student1, student2, student3){
    if(student1 > student2 && student1 > student3){
        return "jim sera"
    }
    else if( student2 > student3 && student2 > student1){
        return "kamrul is sera";
    }
    else{
        return "emon sera";
    }
}

const highestMark = getMax(jim, kamrul, emon);
console.log(highestMark);


let numbers = [12, 23, 34, 45, 6, 55];
console.log(Math.max(12, 23, 34, 45, 56, 111));
console.log(Math.min(...numbers));