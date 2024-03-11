const address ="chattagram";
const part = address.slice(2,7);
/*slice means 2 theke suro , 7 ar ager gigit porjonto slice*/
console.log(part);
//.slpit(''),split(','),split('letter')
const sentence = 'nafi is good boy';
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('o'));

const friend = 'halim,kalim,dalim,kolim,nahim';
const friendl = friend.split(',');
console.log(friendl);
const realfriend = ['halim','kalim','dalim','kolim','nahim']
console.log(realfriend.join());
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));
/* .split() dea string ke array banano njai.
.join() dea array ke string banano jai.*/