function inchToFeet(inch) {
    return inch / 12;
}

let result = inchToFeet(79);
console.log(result);


//gm to kg
function gmToKg(gm){
    let toKg = gm / 1000;
    let exactKg = toKg.toFixed(2);
    return exactKg;
}

let alu = 20078;
let aluWeight = gmToKg(alu);
console.log(parseFloat(aluWeight));