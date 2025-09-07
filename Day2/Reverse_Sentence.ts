const sent: string = "india is my country";
const rsent: string[] = sent.split(" ");

let Rev: string = "";
for (let i = rsent.length - 1; i >= 0; i--) {
    Rev += rsent[i] + " ";
}

console.log(Rev.trim());
