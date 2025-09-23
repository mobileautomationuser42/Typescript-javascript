let s="welcome";

//let s=nwe String();

//charAt()
console.log(s.charAt(2)); //l
//concate()
console.log(s.concat("to javascript programing")); // welcometo javascript programing
console.log(s.concat(" to javascript").concat(" programing"));//welcome to javascript programing

//replace

s="welcome to javascript";
console.log(s.replace("javascript","java")); //welcome to java

//substring()
s="welcome";
//wel
console.log(s.substring(0,3));//wel
console.log(s.substring(0,7)); // welcome
console.log(s.substring(3,7))

//toLowerCase()& toUppercase()
console.log(s.toLowerCase());//welcome

console.log(s.toUpperCase());//WELCOME

//trim()
s="    welcome  ";
console.log(s);
console.log(s.trim());


//Numbers
//////////////
// let x=100;
// let x= new Number(100);
let x=102; //Integer value
let y=102.7 //decimal
let z=102.7; //exponencial value
console.log(x,y,z);
x=10;
y=1.8;
z="x";
 console.log(Number.isInteger(x)); //true
 console.log(Number.isInteger(y)); //false
 console.log(Number.isInteger()); //false

 //parseInt()- convert a string into number

 s="12345";
 console.log(typeof(s)); //string
 console.log(typeof(Number.parseInt(s))); //number

 //parseFloat()
 s="123.567"
 console.log(typeof(s)); //string
 console.log(typeof(Number.parseFloat(s))); //number


 //tostring()

 let n=1234;
 console.log(typeof(n)); //number
 console.log(typeof(Number.toString(n))); //string