let person=
{
    firstname :"John",
    lastname:"Kenedy",
    age:50,
    weight:60
}
//Accessing Object Properties
console.log(person["firstname"]) //John
console.log(person.age);//50
//Add new property the existing object
person["height"]=5.5;
console.log(person["height"]);

//Update existing property
person["weight"]=65;
console.log(person["weight"]);

//Remove the property from the object
delete person["age"];
console.log(person["age"]);

console.log("*********** looping object*********");
//for/in loop
for(let x in person)
{
    //console.log(x); //print only property names
   // console.log(person[x]); //print only value of properties
    console.log(x+" "+person[x]);
}
