const max=Math.max(10,20,30,40,50,60,70,80,90);
//console.log(max);
const arrayMax=[12,23,34,45,56,67,78,99];
//console.log(...arrayMax);
//console.log(Math.max(...arrayMax));

// use spread operator to copy.
//const num=[4,6,8,9,12];
const num2=[41,62,83,94,12];
const nums=[...num2]
num2.push(98);
console.log(num2);
console.log(nums);

//advanced.copy of spread operator
const number=[...num2,1000];
console.log(number);

const numbers=[3,4,5];
const allNumbers=[1,2,...numbers,6,7];
console.log(allNumbers);