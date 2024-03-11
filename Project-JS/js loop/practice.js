let cars = ["volvo","toyota", "mercedez", "nessan"]
//cars[0]= "maruti"
console.log(cars);
cars.push("bolo");
console.log(cars);
console.log(typeof cars);
console.log(Array.isArray(cars));
//console.log(cars.pop());
//console.log(cars);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
console.log(fruits.unshift("kala"));
console.log(fruits);
let num =[24,44,56];
let varaiety = cars .concat(fruits,num);
console.log(varaiety);
const fRuits = ["Banana", "Orange", "Apple", "Mango","volvo","toyota", "mercedez", "nessan"]
//fRuits.splice(2,3,"kala","dud");
console.log(fRuits);
console.log(fRuits.slice(3));