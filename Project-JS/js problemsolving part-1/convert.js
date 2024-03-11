// convert 75 inch to feet .
function incToFeet(inch) {
    return inch/12;
}
//-----------------------------------------------------
console.log('Shuvo Height : ',incToFeet(75),'Inch .');
function incToFeet2(inch) {
  return  parseInt(inch/12)+ ' ft '+inch%12+' inch';
}
console.log('Shuvo Height : ',incToFeet2(75));
//-----------------------------------------------------
function milesToKilometer(mile) {
    return mile* 1.60934 +' kilometer';
}
console.log(milesToKilometer(15));
//------------------------------------------------------
function kilometerToMile(kilo) {
    return kilo*0.621371 +' miles .'
}
console.log(kilometerToMile(15));