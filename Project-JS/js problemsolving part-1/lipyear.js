function isLipYear(year) {
    if( year%4 ===0){
        return true;
    }
    return false; 
}
console.log(isLipYear(2052));
//--------------------------------
function isLipYear1(year) {
    if (year%100 !== 0 && year%4 === 0) {
        return true;
    }
    if(year%100 === 0 && year% 400 === 0){
        return true;
    }
    return false;
}
console.log(isLipYear1(2400),isLipYear1(2100),isLipYear1(1900),isLipYear1(2052));