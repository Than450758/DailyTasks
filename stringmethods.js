let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

const name1 = "W3Schools";
let letter1 = name1.at(2);
console.log(letter1);


const name2 = "W3Schools";
let letter = name2[2];
console.log(letter);


let char1 = text[0];
text[0] = "A"; 

//slice(start,end)
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7, 13);
console.log(part1);

let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(7);
console.log(part2);


//- return from back
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(-12);
console.log(part3);

let text4 = "Apple, Banana, Kiwi";
let part4= text4.slice(-12, -6);
console.log(part4);


//substring(start,end)
let str = "Apple, Banana, Kiwi";
let partstr = str.substring(7, 13);
console.log(partstr);




//substr(start,count)
let str1 = "Apple, Banana, Kiwi";
let partstr1 = str1.substr(7, 6);
console.log(partstr1);

let str2 = "Apple, Banana, Kiwi";
let partstr2 = str2.substr(7);
console.log(partstr2);


let t1 = "Hello World!";
let t2 = t1.toUpperCase();

let t3 = "Hello";
let t4 = "World";
let t5 = t3.concat(" ", t4);

let u1 = "      Hello World!      ";
let u2 = u1.trim();

let u3 = "     Hello World!     ";
let u4 = u3.trimStart();
console.log(u4);

let y1 = "     Hello World!     ";
let y2 = y1.trimEnd();
console.log(y2);

let h1 = "5";
let h2 = h1.padStart(4,"6");
console.log(h2);

let n1 = "5";
let nn = n1.padStart(4,"x");
console.log(nn);

let b1 = "5";
let bb = b1.padEnd(4,"x");
console.log(bb);

let ee1='Dylan';
console.log(ee1.padStart(10,'a'));

let e1='Dylam Israel';
console.log(e1.padStart(10,'s'));
let ee='Youtube.com/odingTutorials360';
console.log(ee.padStart(100).length);
console.log(ee.padEnd(1));

let mm = "Hello world!";
let nb = mm.repeat(2);
console.log(nb);

let texttt = "Hello world!";
let result = texttt.repeat(4);
console.log(result);

let texty = "Please visit Microsoft!";
let newText1 = texty.replace("Microsoft", "W3Schools");

let textm = "Please visit Microsoft and Microsoft!";
let newText = textm.replace(/Microsoft/g, "W3Schools");
console.log(newText);
