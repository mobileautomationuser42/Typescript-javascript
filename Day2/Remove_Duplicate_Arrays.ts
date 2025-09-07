const a: number[] = [3, 4, 4, 5, 5, 5, 6, 7, 9, 9]; // O/p = [3, 4, 5, 6, 7, 9]
let j: number = 0;

// Loop through the array and keep only unique elements
for (let i = 1; i < a.length; i++) {
    if (a[i] !== a[j]) {
        j++;
        a[j] = a[i];
    }
}

// Print the array with unique elements
for (let k = 0; k <= j; k++) {
    process.stdout.write(a[k] + " ");
}
