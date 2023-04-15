function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 20;

    const woodForChair = perChair * chairQuantity;
    const woodForTable = perTable * tableQuantity;
    const woodForBed = perBed * bedQuantity;

    const totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;

}

const needFurniture = woodQuantity(2, 1, 2);
console.log(needFurniture);