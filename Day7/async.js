function resolveAfter2Seconds() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject("jhkjhkj");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
 try{ const result = await resolveAfter2Seconds();
  console.log(result);}
  catch (err) {
    console.log(err, "hhkhkh");
  }
  // Expected output: "resolved"
}

asyncCall();
//resolveAfter2Seconds().then(tt => console.log(tt, "thhen")).catch(rr=>console.log(rr,"catch"));