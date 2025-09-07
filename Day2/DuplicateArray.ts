const a: number[] = [3, 5, 4, 3, 2, 2];

for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            console.log(a[j]);
        }
    }
}
