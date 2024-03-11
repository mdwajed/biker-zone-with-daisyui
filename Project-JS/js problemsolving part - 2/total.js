const products = [
  { name: "pant", price: 2200, quantity: 2 },
  { name: "Shirt", price: 1200, quantity: 3 },
  { name: "Shoe", price: 3200, quantity: 1 },
  { name: "tie", price: 800, quantity: 2 },
];
function shoppingPrice(products) {
  let sum = 0;
  for (let product of products) {
    sum += product.price*product.quantity;
  }
  return sum;
}
console.log('Total Shopping Cost : ',shoppingPrice(products),' Tk');