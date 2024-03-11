function evenNumOnly(numbers) {
    //console.log(numbers);
    const even =[];
    for (const num of numbers) {
        //console.log(num);
        if(num%2 === 0){
            console.log(num);
            even.push(num);
        }
    }
    return even;
}
evenNumOnly([12,23,34,45,56,67,78]);
console.log('Even Numbers are : ',evenNumOnly([12,23,34,45,56,67,78]));
function evenNumber(numbers) {
    let sum = 0;
    for (const numbs of numbers) {
        //console.log(numbs);
        if(numbs%2 === 0){
           // console.log(numbs);
            sum += numbs;
        }
    }
    return sum;
}
evenNumber([45,67,78,90,34,55,30]);
const num = evenNumber([45,67,78,90,34,55,30])
console.log('Sum of Even Numbers is : ',num);
function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }