const person = {
  name:'wajed',
  age:40,
  profession:'developer',
  address:'brahmanbaria',
  'fav places':['brahmanbaria','nabinagar','lahari']
 };
console.log(person);
// two ways to print objects:
console.log(person.name);
console.log(person['name']);
// to change value of an object:
person.name = 'nafi';
console.log(person.name);
//--------------------------------
person['name'] = 'nehan';
console.log(person['name']);
person.age = 50;
console.log(person.age);
console.log(person);
person['fav places'] = ['b-baria','nabinagar','lahari'];
console.log(person['fav places']);
console.log(person);
