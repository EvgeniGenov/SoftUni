function bombNumbers(arr, bomb) {
    let bombNumber = bomb[0];
    let power = bomb[1];

    let indexOfBomb = arr.indexOf(bombNumber);

    while (indexOfBomb !== -1) {
        let start = Math.max(0, indexOfBomb - power);
        let end = power * 2 + 1;
        arr.splice(start, end);
        indexOfBomb = arr.indexOf(bombNumber);
    }
    let sum = 0;
    for (let nums of arr) {
        sum += nums;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);