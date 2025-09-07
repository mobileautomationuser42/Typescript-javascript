const a: number[] = [4, 23, 5, 2, 1, 16];
let max: number = a[0];

for (let i = 1; i < a.length; i++) {
    if (max < a[i]) {  // for minimum, use max > a[i]
        max = a[i];
    }
}

console.log(max);
export {};