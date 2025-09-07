//only interview prospective not Automation 



// Example 1:
/*
// Function that takes callback function as a parameter
function greet(name: string, callback: (message: string) => void) {
    console.log(name);
    callback("Hello"); // executing the callback function
}

// Callback function
function showMessage(message: string) {
    console.log(message);
}

// Calling the function by passing the callback function
greet("John", showMessage);
*/
// Example 2:

function sum(a: number, b: number, callback: (result: number) => void) {
    let result = a + b;
    callback(result);
}

// Callback function
function displayResult(result: number): void {
    console.log(result);
}

sum(10, 20, displayResult);
