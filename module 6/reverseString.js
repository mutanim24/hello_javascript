const myName = 'MD Muhim Uddin Tanim';
let reverseName =  ' ';
function reverseString(texts){
    for(let i = texts.length - 1; i >= 0; i--){
        let text = texts[i];
        reverseName += text;
    }
    return reverseName;
}

const inputName = reverseString(myName);
console.log(inputName);


// by split
function reverse(names){
    let nameArray = names.split("");
    let ultaNam = [];
    for(let i = nameArray.length-1; i >= 0; i--){
        let name = nameArray[i];
        ultaNam.push(name);

    }
    return ultaNam.join("");
}

const inputnam = reverse(myName);
console.log(inputnam);