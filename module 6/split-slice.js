const lyrics = 'tumi bondhu KHALA pakhi. ami jeno ki?';
//split
const alada = lyrics.split(" ");
console.log(alada);

const aladaAlada = [
    'tumi',  'bondhu',
    'KHALA', 'pakhi',
    'ami',   'jeno',
    'ki?'
  ]
//join
const join = aladaAlada.join(" ");
console.log(join);

//slice
const specificWord = lyrics.slice(0, 4);
console.log(specificWord)
const specificWord2 = lyrics.substring(0, 4);
console.log(specificWord2);
const specificWord3 = lyrics.substr(0, 4);
console.log(specificWord3);


