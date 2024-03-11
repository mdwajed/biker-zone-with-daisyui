const college = {
    name:'crescent',
    class:['11', '12'],
    event: ['science fair','bijoy dibosh','21 feb'],
    unque:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top',
        }
    }
}
console.log(college.unque.color);
console.log(college.unque.result.merit);
college.unque.result.merit ='top top top merit';
console.log(college.unque.result.merit);
college.event[1] ='16 dec'
console.log(college.event[1]);
delete college.class;
console.log(college)