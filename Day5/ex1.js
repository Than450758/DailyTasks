const person=[
    {name:"Akari",
        age:12,
        Gender:"female"
    },
    {name:"Akari1",
        age:13,
        Gender:"female"
    },
    {name:"Akari2",
        age:14,
        Gender:"female"
    },
];
const result=person.map(stu => console.log(stu));
const result1=person.map(tu => console.log(tu.name));
const result2=person.map(tue => console.log(tue.age));
const result3=person.map(tur=> console.log(tur.Gender));