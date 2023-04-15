
function noDuplicate(names){
    let uniqueName = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(uniqueName.includes(name) === false){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}

const names = ["tanim", "amin", "ricky", "tanim", "amin", "riyad", "ricky", "tanim" , "mahdee", "mahdee"];
const uniqueNameList =  noDuplicate(names);
console.log(uniqueNameList);