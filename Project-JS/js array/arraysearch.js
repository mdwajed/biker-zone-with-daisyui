//JavaScript Array indexOf()
//The indexOf() method searches an array for an element value and returns its position.

//Note: The first item has position 0, the second item has position 1, and so on.
//Array.indexOf() returns -1 if the item is not found.
//Example
//Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf('Mango'));

//----------------------------------
//----------------------------------
/*JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. 
This allows us to check if an element is present in an array (including NaN, unlike indexOf).
*/
//Example:
let fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.includes("Mango"));

