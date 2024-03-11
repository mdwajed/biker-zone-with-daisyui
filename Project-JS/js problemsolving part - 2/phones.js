const phones = [
   { name : "samsung",price :78000,camera :"12mpx",color : "black"},
   { name : "vigo",price :28000,camera :"12mpx",color : "black"},
   { name : "xiomi",price :38000,camera :"12mpx",color : "black"},
   { name : "nokia",price :48000,camera :"12mpx",color : "black"},
   { name : "yamaha",price :58000,camera :"12mpx",color : "black"},]
   function minPrice(phones) {
    let min =phones[0];
    for(let phone of phones){
       if(phone.price<min.price){
         min=phone
       }
    }
    return min;
   }
   const cheap = minPrice(phones);
   console.log('Cheapest Phone : ',cheap);

