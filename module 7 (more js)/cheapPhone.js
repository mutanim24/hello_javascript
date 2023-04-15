const phones = [
    { brand: "vivo", price: 12000, RAM: 8, ROM: 128 },
    { brand: "iPhone", price: 11000, RAM: 6, ROM: 128 },
    { brand: "Samsung", price: 5000, RAM: 8, ROM: 256 },
    { brand: "Xiaomi", price: 80000, RAM: 10, ROM: 128 },
    { brand: "Nokia", price: 100, RAM: 4, ROM: 32 },
    { brand: "Redmi", price: 50000, RAM: 6, ROM: 17000 }
];

function cheapestPhone(phones) {
    let cheap = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheap.price) {
            cheap = phone;
        }
    }
    return cheap;
}

let sendInput = cheapestPhone(phones);
console.log(sendInput);