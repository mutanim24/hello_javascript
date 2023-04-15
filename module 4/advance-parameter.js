// function bringSingara(money){
//     var SingaraPrice = 10;
//     var singaraQuantity = money / SingaraPrice;
//     return singaraQuantity;
// }

// var myTaka = 250;
// var singarasSonkha = bringSingara(myTaka);
// console.log(singarasSonkha);

function getAverage(ass1, ass2, ass3) {
    var total = ass1 + ass2 + ass3;
    var averageMark = total / 3;
    return averageMark;
}


var  myAverageMark = getAverage(60, 60, 58);
console.log(parseFloat(myAverageMark.toFixed(2)));

