function saySomething(name){
    console.log("Hello "+name )
}
// function Expression.
let saySomething1 = function(name1){
    console.log("Hello "+ name1 )
}
saySomething("Programming Hero");
saySomething1("Bohubrihi");

//Arrow Function/ (ES6).
let saySomething2 = (name2,name3) => {
    console.log("I am "+ name2+name3);
}
saySomething("Programming Hero");
saySomething1("Bohubrihi");
saySomething2("Javascript ","(ES6)");