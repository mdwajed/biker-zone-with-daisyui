const apply = (a, b, c, d) => a * b * c * d;
const sum = apply(25, 4, 8, 100);
console.log(sum);
// object parameter.
const getAge = person => person.age;
//const person = { name: "wajed", age: 40 };
const age = getAge({ name: "wajed", age: 40 });
console.log(age);

const getNumber=nubers=>nubers[3];
const nuber=getNumber([23,45,67,80]);
console.log(nuber);

const doubleIt=nubers=>nubers*10;
console.log(doubleIt(10));
// no parameter.
const getPI=()=>Math.PI;
console.log(getPI());
// large arrow function.
const getMath=(x,y,z)=>{
    const sum=x+y+z;
    const deduct=x-z;
    const divide=sum/y;
    const multiply=sum*deduct*divide;
    return multiply;
}
console.log(getMath(4,5,6));