function discountedPrice(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
  if (quantity <= 100) {
    return quantity * 100;
  } else if (quantity <= 200) {
    return (100*100)+(quantity-100)* 90;
  } else {
   return 100*100+100*90+(quantity-200)*70
  }
}
const price = discountedPrice(250);
console.log(" Total Discounted Price : ", price);
