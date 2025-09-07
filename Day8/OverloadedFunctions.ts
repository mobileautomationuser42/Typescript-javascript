// step1: write signatures of functions
// step2: implement a function
// step3: calling function

// Example 1: Different parameter Types (data types)
/*
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {
    if (typeof param === "number") {
        return (`User ID is ${param}`);
    } else {
        return (`User Name is ${param}`);
    }
}

console.log(getInfo(101));
console.log(getInfo("John"));
*/
// Example 2: Different Number of Parameters
/*
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

console.log(add(10, 20));      // Output: 30
console.log(add(10, 20, 30));  // Output: 60
*/
// Example 3: Different return type
/*
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 2;
    }
}

console.log(processInput("welcome")); // Output: WELCOME
console.log(processInput(5));         // Output: 10
*/
// Example 4:

function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Hello ${value}`;
    } else if (typeof value === "number") {
        return `You are ${value} years old`;
    } else {
        let res: string = value ? "married" : "single";
        return res;
    }
}
console.log (greet("Alice"));   // "Hello Alice"
console.log(greet(25));      // "You are 25 years old"
console.log(greet(true)); // "married"
console.log(greet(false));   // "single"