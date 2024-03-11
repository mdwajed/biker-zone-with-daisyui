const height = [45,65,76,78,82,34,90,88];
function getHeight(numbers) {
   let number=numbers[0]
   for (const num of numbers) {
    if(num<number){
        number=num
    }
   } 
   return number;
}
console.log(getHeight(height));

