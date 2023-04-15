const friends = ['sajid', 'kamal', 'samsul', 'rahima bilkius', 'khaleda akter khatun'];

function bestFriend(friends){
    let largestName = friends[0];
    for(const friend of friends){
        if(friend.length > largestName.length){
            largestName = friend;
        }
    }
    return largestName;
}

const largeName = bestFriend(friends);
console.log(largeName);

