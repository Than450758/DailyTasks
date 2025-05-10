
function add1(...nums){
    let total= nums.reduce(function(x,y){
        return x+y;
    });
    console.log(total);}
add1(3, 6, 9, 12);
function add(...nums){
    let total= nums.reduce((x,y)=>{
        return x+y;
    });
    console.log(total);}
add(2, 6, 9, 12);
function math( a, b, fn){
    return fn(a,b)
  
    }
    const add = (a, b)=> a+b;
    const multi = (a, b)=> a*b;

    

const uu= math(3, 6, (a, b) => a+b ); 

