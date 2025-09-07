let a:number=20 , b:number=10

//Arithmetic Operator
console.log("******** Arithmetic Operator ********")
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(5**2);


console.log("******** Assignment Operators ********")
// Assignment Operators =

a = 10;
b = 5;

// a += b;   // a = a + b;
// console.log(a)

console.log(a += b);  // a = a + b  ---> 15
console.log(a -= b);  // a = a - b  ---> 10
console.log(a *= b);  // a = a * b  ---> 50
console.log(a /= b);  // a = a / b  ---> 10
console.log(a %= b);  // a = a % b  ---> 0

// Relational/Comparison Operators
// Returns boolean - true / false
// > < >= <= == != === (Strict equality)

console.log("********** Relational Operators **********");
a = 10;
b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a <= b);  // true
console.log(a >= b);  // false
console.log(a == b);  // false
console.log(a != b);  // true

// Relational/Comparison Operators
// Returns boolean - true / false
// > < >= <= == != === (Strict equality)

console.log("********** Relational Operators **********");
a = 10;
b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a <= b);  // true
console.log(a >= b);  // false
console.log(a == b);  // false

// Logical Operators  &&  ||  !
// returns true/false (boolean)
// works between boolean variables

// b1   b2   &&    ||    !b1
//----------------------------------------
// true true  true  true  false
// true false false true  false
// false true false true  true
// false false false false true


console.log("**************** Logical Operators ***************")

let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2);  // false
console.log(b1 || b2);  // true
console.log(!b1);       // false
console.log(!b2);       // true

// combination of logical & Relational operators

console.log("***********Mixing of Logical & Relational operators ***********")
console.log(20 > 10 && 10 > 5);   // true
console.log(10 < 20 || 5 > 10);   // true
