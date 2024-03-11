const products=[
    {id:1,name:'lenovo',price:70000},
    {id:2,name:'dell',price:50000},
    {id:3,name:'hp',price:5500},
    {id:4,name:'mac',price:170000},
    
]

// has some properties, method
class Product{
    country='Bangladesh';
    constructor(name){
        this.name=name;
    }
    speak(talk){
        //console.log(`Talking about ${talk}`)
    }
}
const lenovo=new Product('ley halua')
//console.log(lenovo)
lenovo.speak('kii kou')

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}
const rabin=new Teacher('Tapan sir','english')
console.log(rabin);
const kal=new Teacher('harun sir','bangla');
console.log(kal);
rabin.lecture();
kal.lecture();
