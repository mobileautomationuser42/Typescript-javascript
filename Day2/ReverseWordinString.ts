const str: string = "welcome to java"; // original string

const words: string[] = str.split(" "); // splitting string into words
let Revst: string = "";

for (const w of words) {
    let Revwo: string = "";
    for (let i = w.length - 1; i >= 0; i--) {
        Revwo += w.charAt(i);
    }
    Revst += Revwo + " ";
}

console.log(Revst.trim());
