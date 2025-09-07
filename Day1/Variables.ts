// Variable: container which can hold/store some data.

// Syntax:    keyword variableName :data type(optional)=value
// Ex:       var age:number=30
// Ex:       var age=30

// var age=30;
// console.log(age);

// var vs let vs const
//----------------------- 
/*
 1) Scope
 2) Declaration/Value Assignment
 3) Re-declaration
 4) Re-initialization/Re-assignment
 5) Hoisting
*/

//var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.

//Scope - Accessible area (Functional Scope & Block Scope)
//Example 1: var (Functional scope)

/*function varScope()
{
    if(true)
    {
        var msg = "Hello World";
        //console.log(msg);
    }
    console.log(msg);
} 

varScope();
*/

//Example 2: let and const (Block Scope)
/*
function blockScope()
{
    if(true)
    {
        let msg = "Hello World";
        const greet = "Hello const";
        console.log(msg);
        console.log(greet);
    }
    //console.log(msg); // cannot access
    //log(greet); //cannot access
}

blockScope();
*/


//Example 3:
/*
function scopeDiff()
{
    if(true)
    {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        //console.log(num1);
        //console.log(num2);
        //console.log(num3);
    }

    console.log(num1); // access - functional
    console.log(num2); // cannot access - block
    console.log(num3); // cannot access - block
}

scopeDiff();
*/


// 2) Declaration/Value Assignment

//Example1: var can be declared without initialization
/*
var x; // declaration
console.log(x); // undefined
x = 30; // initialization
console.log(x);
*/

//Example2: let can be declared without initialization
/*
let y; // declaration
console.log(y);
y = 30;
console.log(y);
*/

//Example 3: const must be initialized at the time of declaration
//const z; // incorrect
// const z = 50; // correct
// console.log(z);


//3) Re-declaration
//var - allows the Re-declaration
//let and const - not allows the Re-declaration (making code safer)

//Example 1: var allows the re-declaration
/*
var city="New York";
var city="Los Angeles";
console.log(city);
*/

//Example2: let - not allowed re-declaration

// let country = "India";
// let country = "US";


//Example3 : const - not allowed re-declaration
//const planet="Earth";
//const planet="Mars";
//console.log(planet);


//4) Re-initialization/Re-assignment
//var and let - Re-assignment Allowed
//const  - Re-assignment Not allowed (Only constants allowed - cannot change the value)

//Example 1: var allows re-assignment
/*
var age = 25;
age = 30; // allowed
console.log(age);
*/

//Example 2: let allows re-assignment
/*
let age = 25;
age = 30; // allowed
console.log(age);
*/

//Example 3: const not allows re-assignment
/*
const age = 25;
age = 30; // Not allowed
console.log(age);
*/

// 5) Hoisting - var (Hoisted with undefined)
/*
console.log(a); // undefined
var a = 10;
console.log(a);
*/
/*
console.log(a); // Not initialized
let a = 10;
console.log(a);
*/

console.log(a); // Not initialized
const a = 10;
console.log(a);
