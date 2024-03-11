function evenSizedNumber(str) {
    console.log(str);
    console.log(str.length);
    if(str.length%2 === 0){
        console.log('even size')
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }    
}
console.log(evenSizedNumber('Dhaka'));
console.log(evenSizedNumber(['rft','yut','nmb','oil']));
//--------------------------------------------
function lenOfNumber(numbers) {
    return numbers.length;    
}
console.log(lenOfNumber(['hyk','oiy','sde','vgb','ooik']));
//------------------------------------------------
function getAge(person) {
    return person.age;
}
console.log(getAge([]));