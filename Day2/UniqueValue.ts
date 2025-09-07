const a: number[] = [1, 2, 2, 3, 4, 4, 5, 5];
// Sort the array
a.sort((x, y) => x - y);

console.log("Unique values in the array:");

// Traverse the sorted array to find unique values
for (let i = 0; i < a.length; i++) {
    if ((i === 0 || a[i] !== a[i - 1]) && (i === a.length - 1 || a[i] !== a[i + 1])) {
        // process.stdout.write(a[i] + " ");
        console.log(a[i]);
    }
}
 