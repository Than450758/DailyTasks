/*const arr=["bird" ," dog" , "cat" ];
const c1=arr.pop();
console.log(c1);
console.log(arr.push("go","gawa"));

const c3=arr.map((name,index)=> `${name}(${index})`);
console.log(c3);

const q1=arr.indexOf("dog");
console.log(q1);
if (q1 !== -1) {
  birds.splice(q1, 1);
}
console.log(arr);*/
/*const asrr2=["bird","cat","chicken"];
const index=asrr2.indexOf("cat");
console.log(index)
if (index !== -1) {
  asrr2.splice(index, 1);
}
console.log(asrr2);
const asrr22=["bird","cat","chicken"];

const as=asrr22.filter(s=>s.startsWith("c"));
console.log(as);
*/

/*const band =[ 
    {
      name: "Parachutes",
      released: 2000
    },
    {
      name: "A Rush of Blood to the Head",
      released: 2002
    },
    {
      name: "Viva la Vida or Death and All His Friends",
      released: 2008
    },
    {
      name: "Everyday Life",
      released: 2019
    }
]
band.map((album, index) => {
  console.log(`  ${index + 1}. ${album.name} (Released: ${album.released})`);
});
*/
//////////////////////
/*
const per1={
name: "Aye",
age:14,
gender:"female",
greeting : function(){
    console.log(`hello ${this.name} ${this.age}`);
}}
const per2={
name: "yan",
age:15,
gender:"male",
greeting : function(){
    console.log(`hello ${this.name} ${this.age}`);
}}
per1.greeting();
per2.greeting();

*/

function nn(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
nn.prototype.greeting=function(){
    console.log(`hello ${this.name}${this.age}`);
}
const c1=new nn("Aye",12,"female");
const c2=new nn("Mya",14,"female");
c1.greeting();
c2.greeting();
