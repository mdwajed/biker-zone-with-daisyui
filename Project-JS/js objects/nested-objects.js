const myBio = {
    name : 'wajed',
    age :42,
    subject :{
       sub1: 'bangla',
       sub2 : 'english',
       sub3 : 'physics',
       sub4 : 'chemistry'
    }
}
myBio.subject.sub3 = 'biology';
console.log(myBio.subject.sub3);
console.log(myBio);
for (let x in myBio.subject) {
//console.log(x);
//console.log(myBio[x])
console.log(x +':' +myBio.subject[x]);
for(let j in subject){
    console.log(j +': '+ subject[j])
}
    
}
//----------------------------------
//let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
