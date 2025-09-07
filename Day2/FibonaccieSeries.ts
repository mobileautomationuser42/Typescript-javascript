let n1: number = 0, n2: number = 1, sum: number = 0;
process.stdout.write(n1 + " " + n2);

for (let i = 2; i < 10; i++) {
    sum = n1 + n2;
    process.stdout.write(" " + sum);
    n1 = n2;
    n2 = sum;
}
