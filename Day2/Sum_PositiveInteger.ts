const arr: number[] = [12, -4, 8, -9];
let sum: number = 0;

for (const num of arr) {
    if (num > 0) {
        sum += num;
    }
}

console.log("Sum of positive integers: " + sum);
