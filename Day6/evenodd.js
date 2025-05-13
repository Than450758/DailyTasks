// arr index
//1 to 20 
//even 
//odd
//even include ? odd include?*/
const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const result=arr1.filter(x=>x%2===0)
   console.log(result);

const result2=arr1.filter(e=>e%2!==0)
   console.log(result2);
   const c1=arr1.map(x=>{
    if (x%2===0){
       console.log(x,"even include");}
   else if(x%2!==0) console.log(x,"odd include");
   });
const rr=result.map(x=>
{
    if (x%2===0){
        console.log("even");
    }
    else return console.log("odd");

}
);
    const re=result2.map(x=>
{
    if (x%2===0){
        console.log("even");
    }
    else return console.log("odd");

}
);