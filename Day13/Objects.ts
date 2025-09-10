// object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

// Ex:

// employee -- name, desig, sal, dep
//                bonus(), getemdetails(), setdetails()

// student - name, sid, grade
//                getdetails(), setdetails()

// Different ways to create an object in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)----->Automation Prospective only this above 3 onyly interview prospective

// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

/*
let employee: object = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer"
}
*/

let employee = {
    name: "John",
    salary: 50000,
    job: "Engineer",
    getDetails: function() {
        //console.log(this.name, this.salary, this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}
console.log(typeof(employee))
// accessing object - approach 1 (using dot notation)
console.log(employee.name, employee.salary, employee.job);        // John 50000 Engineer
console.log(employee.getDetails());                               // John is a Engineer earning 50000

// accessing object - approach 2 (using bracket notation)
console.log(employee["name"], employee["salary"], employee["job"]);  // John 50000 Engineer
console.log(employee["getDetails"]());                            // John is a Engineer earning 50000

// Modify the value
employee.job = "Manager";        // employee["job"] = "Manager";
console.log("Modified job is:", employee.job); // Manager

// 2. Inline Type Object - We also define the datatype of the keys (TS)

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: function() {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};
console.log(student.getSummary()); // Scott is 15 years old and scored grade A

// Problem with Inline Type object: Need to repeat structure for every object

let student1: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Marry",
    age: 16,
    grade: "B",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};
console.log(student1.getSummary()); // Marry is 16 years old and scored grade B
//====================================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

// Example 1:

type Product = {
    name: string,
    price: number,
    getInfo: () => string
};

let book1: Product = {
    name: "Learn java",
    price: 300,
    getInfo: function() {
        return `${this.name} costs ${this.price}`;
    }
}

let book2: Product = {
    name: "Learn Python",
    price: 500,
    getInfo: function() {
        return `${this.name} costs ${this.price}`;
    }
};

let book3: Product = {
    name: "Learn JS",
    price: 600,
    getInfo: function() {
        return `${this.name} costs ${this.price}`;
    }
};

console.log(book1.getInfo()); // Learn java costs 300
console.log(book2.getInfo()); // Learn Python costs 500
console.log(book3.getInfo()); // Learn JS costs 600
