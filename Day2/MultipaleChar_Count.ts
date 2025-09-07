const s: string = "aaabbbcc";
let result: string = "";

let count: number = 1; // To count occurrences of characters

for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
        count++; // Increment count if current character is same as the next
    } else {
        result += s.charAt(i) + count.toString(); // Add character and its count
        count = 1; // Reset count
    }
}

// Add the last character and its count
result += s.charAt(s.length - 1) + count.toString();

console.log("Compressed String: " + result);
