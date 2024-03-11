const wajed = {
    name: "wajed",
    age: 40,
    prof: "developer",
    pno: '01987665443'
  };

  // find property.
  //console.log(wajed)
  const keys=Object.keys(wajed);
  //console.log(keys);

  // find values.
  const values=Object.values(wajed);
  //console.log(values);

// to delete a property and its value.
const {prof, ...restwajed}=wajed;
//console.log(restwajed);

// freeze an object.
Object.freeze(wajed);
// add an item.
wajed.name='nehan'
console.log(wajed);
