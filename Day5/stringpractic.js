const str1="cat,dog,fish,rabbit";
const length=str1.length();
const aa=str1.at(2);
console.log(aa);
const vb=str1.at(1);
console.log (vb);

const b1=str1.charAt(1);
console.log (b1);

console.log(str1[2]);
str1([2])="bear";
console.log(str1[2]);

const cc=str1.slice(1,2);
console.log(cc);

const c1=str1.slice(-2);
console.log(c1);

const c2=str1.substring(0,2);
const c4=str1.substr(1,2);




str2="chicken,pig";
console.log(str1.concat(str2));



//to convert string into array , use split
arr1=str1.split(",");
arr2=str1.split("*");
console.log(arr1);
console.log(arr2);

console.log(str1.indexOf("fish"));
str2[2]="fish";
console.log(str2.lastIndexOf("fish"));


str1.search("fish");
strr="hello welcome every one one hello";
strr.match(llo);
strr.match(/llo/g);
strr.matchAll("llo");
console.log(strr.includes("one"));
console.log(strr.startsWith("one"));
console.log(strr.endsWith("one"));


//template string
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

