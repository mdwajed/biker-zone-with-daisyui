const numbers = [23, 30, 35, 55, 67, 89, 45, 90, 22, 99];
function oddNumbers(numbers) {
  const odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }

  let sum = 0;
  for (const number of odd) {
    sum += number;
  }
  return sum / odd.length;
}
console.log("Average of the odd numbers : ", oddNumbers(numbers));

const digits = [23, 30, 35, 55, 67, 89, 45, 90, 22, 99, 60];
function evenNumber(numbers) {
  let even = [];

  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  let sum = 0;
  for (const number of even) {
    sum += number;
  }
  return sum / even.length;
}
console.log("Average of Even Number : ", evenNumber(digits));