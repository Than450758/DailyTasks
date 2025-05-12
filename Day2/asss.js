function resolve3min(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved');
        },3000);
    });
}

/*resolve3min.then((data)=>{
    console.log(data);
});*/
async function getAsyncData(){
    const result = await resolve3min();
        console.log(result);

    
}
getAsyncData();