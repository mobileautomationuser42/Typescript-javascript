 // Increment   ++
// Decrement   --

// let x: number = 10;

// x++;    // post increment     // x = x + 1;
// console.log(x); // 11

// ++x;    // pre-increment
// console.log(x); // 11

// let res: number = x++;
// console.log(res); // 10
// ++x;  // pre-increment
// console.log(x); // 11

/*
let res: number = x++;
console.log(res); // 10
console.log(x);   // 11
*/

/*
let res: number = ++x;
console.log(res); // 11
console.log(x);   // 11
*/

// Ternary/conditional operator

// ?:
// exp ? res1 : res2;

// Example 1
/*
let a: number = 100, b: number = 200;

let res: number = (a > b) ? a : b;
console.log(res); // 200
*/

// Example 2:

let personAge: number = 30;

// Ternary operator: condition ? valueIfTrue : valueIfFalse
let res: string;
res = (personAge >= 18) ? "Adult" : "Minor";
console.log(res); // Adult
