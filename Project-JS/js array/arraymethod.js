const fruits = ['apple', 'banana', 'egg', 'potato', 'tomato'];
//JavaScript Array length:
//The length property returns the length (size) of an array:
//console.log(fruits.length);
//JavaScript Array toString():
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
//console.log(fruits.toString());
//JavaScript Array push():
//The push() method adds a new element to an array (at the end):
fruits.push('malta');
//console.log(fruits);
//JavaScript Array pop():
//The pop() method removes the last element from an array:
fruits.pop('malta');
//console.log(fruits);
//JavaScript Array shift():
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.shift();
//console.log(fruits);
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift('lemon');
//console.log(fruits);
//Changing Elements:
//Array elements are accessed using their index number:
fruits[3] = 'milk';
//console.log(fruits);
//Merging Arrays (Concatenating):
//In programming languages, concatenation means joining strings end-to-end.
//Concatenation "snow" and "ball" gives "snowball".
//Concatenating arrays means joining arrays end-to-end.
//Note:
//The concat() method does not change the existing arrays. It always returns a new array.
//The concat() method can take any number of array arguments.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
//console.log(myChildren);
//Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mySpouse = arr1.concat(arr2, arr3);
//console.log( mySpouse);
/*JavaScript Array flat()
ES2019 Introduced the Array flat() method.
The flat() method creates a new array with sub-array elements concatenated to a specified depth.*/
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
//console.log(newArr);
/*Splicing and Slicing Arrays
The splice() method adds new items to an array.
The slice() method slices out a piece of an array*/
const fall = ["Banana", "Orange", "Apple", "Mango"];
fall.splice(2, 0, "Lemon", "Kiwi");
//console.log(fall);
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.*/
const fal = ["Banana", "Orange", "Apple", "Mango","kala"];
fal.splice(2, 2, "Lemon", "Kiwi");
console.log(fal);
/*JavaScript Array slice():
The slice() method slices out a piece of an array into a new array:
Example:
Slice out a part of an array starting from array element 1 ("Orange"):*/
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1);
