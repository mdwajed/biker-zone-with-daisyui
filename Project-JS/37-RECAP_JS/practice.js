const nums = [23, 5, 87, 69];
for (let i = 0; i < nums.length; i++)
  //console.log(nums[i])
  for (let num of nums) {
    //console.log(num)
  }
//console.log(nums[2]);
// ${}
const x = (a, b) => a + b;
const y = x(5, 6);
//console.log(y);

const nm = (r) => r + 10;
nm(10);
//const lg=(o=100)=>o%2==0;

const lg = (o) => o % 2 === 0;
//console.log(lg(50))
const hello = () => "Hello World!";
//console.log(hello())
const nafi = (a, d, c) => {
  const sum = a + d + c;
  return sum;
};
nafi(1, 2, 3);
const term = [1, 2, 3, 5, 0, 6, 8, 7];
term.push(88);
//console.log(term)
const hgj = [...term, 60];
//console.log(hgj)
// const Name = [
//   {
//     cover_image: "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
//     profile_image:
//       "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
//     title: "Gaming Enthusiast Expert in Play",
//     description:
//       "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
//     author: {
//       name: "John Doe",
//       designation: "ROR Developer",
//       posted_date: "29 January 2024",
//     },
//   },
// ];
// Name.forEach((items) => {
//   const designation = items.author.designation;
//   const description = items.title;
//   //console.log(designation);
//   //console.log(description);
// });

let products = [{
  name: "walton",
  price: 6000,
  color: "red",
  date: "25,jan"},
  {name: "samsung",
  price: 7000,
  color: "red",
  date: "25,jan"},
 { name: "techno",
  price: 60000,
  color: "red",
  date: "25,jan"},
  {name: "vive",
  price: 16000,
  color: "red",
  date: "25,jan"},
  {name: "apple",
  price: 26000,
  color: "red",
  date: "25,jan"},
];
const cheap = products.filter((product) => product.price > 10000);
console.log(cheap);

let Name = [
  {
    cover_image: "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
    profile_image:
      "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
    title: "Gaming Enthusiast Expert in Play",
    description:
      "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
    author: {
      name: "John Doe",
      designation: "ROR Developer",
      posted_date: "29 January 2024",
    },
  },
];

Name.forEach(item => {
  const designation = item.author.designation;
  const description = item.description;
  console.log('designation:', designation);
  console.log("Description:", description);
});

// Example 1: Destructuring Arrays
const numbers = [1, 2, 3, 4, 5];

// Extracting values from the array
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Example 2: Destructuring Objects
const person = {
  name: 'John Doe',
  age: 30,
  country: 'USA'
};

// Extracting values from the object
const { name, age, country } = person;

console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(country); // Output: USA

// Example 3: Nested Destructuring
const user = {
  id: 101,
  userDetails: {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice@example.com'
  }
};

// Extracting nested values
const { id, userDetails: { firstName, lastName, email } } = user;

console.log(id); // Output: 101
console.log(firstName); // Output: Alice
console.log(lastName); // Output: Smith
console.log(email); // Output: alice@example.com


// const {id, userDetails: {firstName,...rest}}=user;
//  console.log(id); // Output: 101
//  console.log({firstName,...rest}); // Output: Alice
// // console.log(lastName); // Output: Smith
// // console.log(email); // Output: alice@example.com