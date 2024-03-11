const rahim = 97;
const karim = 99;
if(rahim > karim){
    console.log('rahim is the best boy')
}
else{
    console.log('karim is the best boy')
}
function students(rahim,karim) {
    if (rahim>karim) {
        return 'rahim is the best boy'
        
    }
    else{
        return 'karim is the best boy'
    }
    
}
const student  = students(77,79);
const student1 = students(87,69);
const student2 = students(97,89);
const allstudent =students(student,student1,student2);
console.log(allstudent);