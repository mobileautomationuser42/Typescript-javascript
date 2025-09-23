//1. Arithmetic Operators
console.log("1. Arithmetic Operators");
let x=10,y=20;
console.log(x+y); 
console.log(x-y); 
console.log(x*y); 
console.log(x%y); 
console.log(x/y); 
console.log(5**2); 
 
 //2. Assignment Operators
 console.log("2.Assignment Operators:");
 let x1 = 10;
 x1 += 5; // 15
 console.log(x1);

//3. Comparison Operators
console.log("3.Comparison Operators:");
console.log(5 == "5");  // true
console.log(5 === "5"); // false


 //4.Logical Operators
 console.log("4.Logical Operators:");
 let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false

//5. String Operators
console.log("5.String Operators:");
let greeting = "Hello";
greeting += " World";
console.log(greeting); // "Hello World"

//6.Conditional Operator
console.log("6.Conditional Operator:");
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"

//7.Type Operators
console.log("7.Type Operators:")
console.log(typeof "Hello"); // "string"
console.log([] instanceof Array); // true
//8.Unary Operators
console.log("8.Unary Operators:")
let a1 = 5;
console.log(++a1); // 6
console.log(a1--); // 6 (then x becomes 5)

//9.Special Operators
console.log("9.Special Operators:")
let obj = { name: "Alice", age: 25 };
delete obj.age;
console.log(obj); // { name: "Alice" }