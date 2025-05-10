//classes
export class Animal{
    constructor(types,legs){
        this.type=types;
        this.leg=legs;
    }
    //makeNoise(sound){
      //  console.log(sound);
  //  }
  makeNoise(sound ='Loud noise'){
    console.log(sound);
}
get metaData(){
    return `Type :${this.type},Legs: ${this.leg}`;
}
static uuuturn10(){
    return 10;
}
}
export class Cat extends Animal{
 constructor(type,legs,tail){
    super(type,legs);
    this.tail=tail;
    makeNoise(sound ='meow'){
        console.log(sound);
 }
}
}

