function sortmaker(arr) {
  const [a, b] = arr;
  //--------------------------------
  if (a < 0 || b < 0) {
    return "invalid input";
  }
  if (a == b) {
    return "equal";
  }
  if (a > b) {
    return [a, b];
  } else {
    return [b, a];
  }
}
console.log(sortmaker([4, 9]));
//-----------------------------------------------------
const object = { street: 10, house: "15A", society: "Earth Perfect" };
const objects = { street: 10, house: "_", society: "Earth Perfect" };
const object1 = { street: 10, house: "_", society: "_" };
function findAddress(object) {
  return object.street + "," + object.house + "," + object.society;
}
console.log(findAddress(object));
console.log(findAddress(objects));
console.log(findAddress(object));

function canpay(changeArray, totalDue) {
  if(changeArray.length===0){
    return 'your array is empty';
  }
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }
  if(sum>=totalDue){
    return true;
  }
  else{
    return false;
  }
}
console.log(canpay([1,2,5], 10));
console.log(canpay([1,5,5], 10));
