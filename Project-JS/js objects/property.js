const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  //console.log(person.lastName);
  person.lastName = 'wajed';
  //console.log(person.lastName)
  //console.log(person);
 
  for (let x in person){
    //console.log(x+':'+person[x]);
  //console.log(person[x]);
    //console.log(x);
  }
  // add property:
  person.occupation = "freelancer";
  console.log(person);
  // delete property:
  delete person.age;
  console.log(person);