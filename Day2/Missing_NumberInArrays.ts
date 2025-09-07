const a: number[] = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// Array should not have duplicates
// Array does not need to be sorted
// Values should be within range

let sum1: number = 0;
for (let i = 0; i < a.length; i++) {
    sum1 += a[i];
}
console.log("Sum of elements in array: " + sum1);

let sum2: number = 0;
for (let i = 1; i <= 10; i++) {
    sum2 += i;
}
console.log("Sum of range of elements: " + sum2);

console.log("Missing number is: " + (sum2 - sum1));
