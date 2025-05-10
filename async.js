function add(){
    let result=0
    for(let i=1;i<=1000;i++){
        result+=1;
    }
    return result;
}
async function add1000(){
    let result =await add()
    console.log(result);
}
console.log("some process");
add1000();
console.log("other process");