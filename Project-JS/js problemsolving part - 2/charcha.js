function add(num1,num2){
return num1+num2;
}
function substract(num1,num2){
return num1-num2;
}
function multiply(num1,num2){
return num1*num2;
}
function divide(num1,num2){
return num1/num2;
}
function Calculator(a,b,operation) {
    if(operation === 'add'){
        return add(a,b);
    }
    if(operation === 'substract'){
        return substract(a,b);
    }
    if(operation ==='multiply'){
        return multiply(a,b);
    }
    if(operation ==='divide'){
        return divide(a,b);
    }
}
console.log(Calculator(20,10,'divide'));
