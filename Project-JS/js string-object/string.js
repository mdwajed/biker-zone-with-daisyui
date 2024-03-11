const school = "tech valley Corporation";
console.log(school);
 /*toLowerCase()/toLowerCase().to solve the string
 and lowercase problem uppercase*/
console.log(school.toUpperCase());
console.log(school.toLowerCase());

const subject ="chemistry";
const book = "Chemistry";
if(subject === book){
    console.log("I will go to bari");
}
else{
    console.log("I will go to Dhaka")
}
// solve the problem.
if(subject.toLowerCase() === book.toLowerCase()){
    console.log("I will go to bari");
}
else{
    console.log("I will go to Dhaka")
}
/* trimm()/ to solve the strim spacing problem.
woed ar majkhane space thakle trim kaj korbena*/ 
const drink = "water";
const liquid = "water "
if(drink === liquid){
    console.log("ami pani khabo")
}
else{
    console.log("ami pani khabo na")
}
// solve the problem.
const softdrink = "water";
const plaindrink = "water "
if(drink.trim() === liquid.trim()){
    console.log("ami pani khabo")
}
else{
    console.log("ami pani khabo na")
}