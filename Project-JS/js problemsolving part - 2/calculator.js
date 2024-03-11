function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  // return num1 / num2;
}
function Calculator(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "substract") {
    return substract(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else {
    return "'only 'add','substract','divide','multiply' operation is allowed.";
  }
}
console.log(Calculator(8, 5, "substract"));
