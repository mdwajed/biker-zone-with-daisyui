const value = [78000, 27000, 89000, 56000, 29000, 42000, 10000];
function minPrice(prices) {
  let lowest = prices[0];
  for (let price of prices) {
    if (price > lowest) {
      lowest = price;
    }
  }
  return lowest;
}
console.log(minPrice(value));
