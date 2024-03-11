const products = [
  { name: "jug", price: 350, quantity: 5 },
  { name: "plate", price: 150, quantity: 3 },
  { name: "bucket", price: 750, quantity: 8 },
  { name: "chair", price: 3500, quantity: 2 },
];
function totalPrice(products) {
  let sum = 0;
  for (let product of products) {
    sum = sum + product.price * product.quantity;
  }
  return sum;
}
const total = totalPrice(products);
console.log("Total Marketing Cost : ", total);
