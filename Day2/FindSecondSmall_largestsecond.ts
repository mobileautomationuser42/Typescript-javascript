const a: number[] = [4, 2, 3, 1, 0, 6, 12, 15, 20];
a.sort((x, y) => x - y);

const num: number = a.length;

console.log("Second Largest element is " + a[num - 2]);  // Second Largest
console.log("Second Smallest element is " + a[1]);       // Second Smallest
export{}