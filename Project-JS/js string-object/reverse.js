const sentence = "i am a good man";
/*for(const letter of sentence){
    //console.log(letter);
    reverse = letter + reverse;
}*/
const reverse = sentence.split('').reverse().join('');
console.log(reverse);