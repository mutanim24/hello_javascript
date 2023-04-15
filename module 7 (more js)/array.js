const oldFriendsAge = [23, 34, 22, 34, 56]
const newFriendsAge = [45, 56, 45]
console.log(typeof oldFriendsAge);
console.log(Array.isArray(oldFriendsAge));
console.log(oldFriendsAge.includes(34));   //show  true or false
console.log(oldFriendsAge.indexOf(34));    // show 0 or more if searching number is here

//concate == add two array in one array
console.log(oldFriendsAge.concat(newFriendsAge));