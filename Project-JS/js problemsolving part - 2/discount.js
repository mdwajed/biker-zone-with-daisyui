function discountedPrice(quantity) {
   if(quantity<=100){
       return quantity*100
   }
   else if(quantity>100&&quantity<=200){
       return quantity*90
   }
   else{
       return quantity*70
   }

}
console.log('Total Discounted Price : ',discountedPrice(250));;
