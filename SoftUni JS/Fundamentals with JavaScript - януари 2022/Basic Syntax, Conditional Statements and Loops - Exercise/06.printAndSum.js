function printAndSum(a, b) {
    let numToString = '';
    let sum = 0;

    for (let i = a; a <= b; a++) {
        numToString += a + ' ';
        sum += a;

    }
    console.log(numToString);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);