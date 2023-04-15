const lyrics = 'tumi bondhu KHALA pakhi ami jeno ki?';
// console.log(lyrics.includes('khala'));   //normal
// console.log(lyrics.includes('Khala'));   // to lower case from upper case
console.log(lyrics.toLowerCase().includes('Khala'.toLowerCase()));  //convert all(lyrics & search word) upper to lower

//index of
console.log(lyrics.indexOf(" bondhu"));

const searchingWord = "jeno";
if(lyrics.indexOf(searchingWord) !== -1){
    console.log("word is here")
}
else{
    console.log("word doesn't not match")
}

//startWith
const chat = "2mi kmn aso?";
console.log(chat.startsWith("2mi")); //just work for starting word

//endWith
const file = "kamrul.jpg";
console.log(file.endsWith(".jpg"))  //just work for ending word