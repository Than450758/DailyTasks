/*function multiplier(x) {
  return function(y) {
    console.log(x);
        console.log(y);

    return x * y;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10*/


/* function add(a,b) {
    return function(e) {
        res=a+b+e;
      console.log(a+"+"+b+"+"+e+"="+res);
      return res;
    };
  }
  
  const result = add(4,5);
  console.log(result(8));*/


const students = [
    {   id:1,
        name: "stude A",
        age: 12,
        grade: 7
    },
      { id:2,
        name: "stude B",
        age: 5,
        grade: 7
    },
      {id:3,
        name: "stude C",
        age: 5,
        grade: 7

    }]
const delfun=function(id){
    const  del=students.filter(x=>x.id!==id)
        console.log(del);
}
