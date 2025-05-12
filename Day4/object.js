//creating object
const person={};
//add properties
person.firstName="John";
person.lastName="Smith";


//another wway to create object
const person= new Object();


///object constructor function
function Person(first,last){
    this.firstName=first;
    this.lastName=last;
}


///prototype property
function Person(first,last){
    this.firstname=first;
    this.lastname=last;
}
Person.prototype.nationality="English";



//prototype property allow to add new method
Person.prototype.name=function({
    return this.firstName+" "+this.lastName;
});

//JS Object methods
assign (target ,source) 
const person1={
    name : "Snith",
    age : 15,
    height : "five feet"
};
const person2={
    name : "dell",
    age : 12
};

Object.assign(person1,person2);


//object.entries()returns key value pairs
const fruit={Banana:300, Orange:200,Apple:500};
let text="";
for(let [fruit,value] of Object.entries(fruits)){
    text+=fruit+":"+value+"<br";
}



//entries can be used to convert map 
const mymap=new Map(Object.entries(fruits));


//value method return single array value
const fruit={Banana:300, Orange:200,Apple:500};
let text=Object.values(fruit);


//groupby method
const fruit=[
    {name:"apples",quantity:300},
    {name:"banana",quantity:500},
        {name:"apples",quantity:150},
    {name:"mango",quantity:300},

]
function mycall({quatity}){
    return quatity>200? "ok":"low";
}
const result=Object.groupBy(fruits,mycall);
////////////////////////////////////////////////
//Object.keys(return dey of an object)
//get and set methods

const operson={
    firstname : "John"
}