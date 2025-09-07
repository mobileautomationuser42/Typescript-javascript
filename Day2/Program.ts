let org: string = "madam";
let rev: string = "";

for (let i = org.length - 1; i >= 0; i--) {
    rev = rev + org.charAt(i);
}

console.log(org);
console.log(rev);

if (org === rev) {
    console.log("Given string is palindrome");
} else {
    console.log("Given string is not palindrome");
}
