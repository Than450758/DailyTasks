const person=[
    {name:"Akari",
        age:12,
        Gender:"female"
    },
    {name:"Akari1",
        age:7,
        Gender:"female"
    },
    {name:"Akari2",
        age:4,
        Gender:"female"
    },
];

//const result=person.map(stu => console.log(stu));

const result5=person.filter(n=>n.age>7);
console.log(result5);

const result6=person.filter(n=>n.age==7);
console.log(result6);

const result7=person.filter(n=>n.age<7);
console.log(result7);
/*const result1=person.map(tu => console.log(tu.name));
const result2=person.map(tue => console.log(tue.age));
const result3=person.map(tur=> console.log(tur.Gender));*/