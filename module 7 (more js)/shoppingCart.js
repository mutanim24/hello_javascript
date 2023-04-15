const shoppingCart = [
    {name: "shirt", price: 1100, quantity: 2},
    {name: "pent", price: 1500, quantity: 5},
    {name: "shoes", price: 2000, quantity: 1},
    {name: "muuja", price: 100, quantity: 11},
    {name: "t-shirt", price: 1100, quantity: 4}
];

function shoppingExpense(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        let totalPerProductPrice = product.price * product.quantity;
        sum += totalPerProductPrice;
    }
    return sum;
}

const totalExpense = shoppingExpense(shoppingCart);
console.log(totalExpense);