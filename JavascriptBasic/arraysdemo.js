//let cars =["saab","Valvo","BMW"];
let cars =new Array("saab","Valvo","BMW");
console.log(cars);
console.log(cars[2]); //Accessing element

cars[0]="Opel";      //change value
console.log(cars);

//we can have variable of different types in the same Array.
let myarray=[100,"welcome",10.5,true];
console.log(myarray);

//we can have objects in Array
let person1 ={
    name:"john",
    age:30,

};
let person2={
    name:"David",
    age:40
};
let myarray1=[person1,person2];
console.log(myarray1);
console.log(myarray1[0]);


let friuts = ["Banana", "Orange","Apple","Mango"];
console.log(friuts.length); //4

//Looping elements from Array
console.log("-----------------------------------------------")
for(let i=0;i<=friuts.length-1;i++)
{
console.log(friuts[i]);
}
console.log("-----------------------------------------------")
//Looping elements from array using for/of loop
for(ele of friuts)
{
console.log(ele);
}
console.log("-----------------------------------------------")

//Recognize an Array  -typeof
console.log(typeof friuts); //objects
console.log(Array.isArray(friuts));