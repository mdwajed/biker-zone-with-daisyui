const numbers=[2,4,5,7,8,9,13,60];
const double=[];
for(const number of numbers){
    const doubleNumber=number*2;
    double.push(doubleNumber);
}
//console.log(double)
const result=numbers.map(n=>n/2);
//console.log(result);

const name=['wajed','nehan','mohammad','rahman'];
const len=name.map(x=>x);
console.log(len);