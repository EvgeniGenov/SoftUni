function division(a) {
    //2, 3, 6, 7, and 10
    let max = 0;

    if (a % 2 === 0) {
        max = 2;
    }
    if (a % 3 === 0) {
        max = 3;
    }
    if (a % 6 === 0) {
        max = 6;
    }
    if (a % 7 === 0) {
        max = 7;
    }
    if (a % 10 === 0) {
        max = 10;
    }
    if (a % 2 !== 0 && a % 3 !== 0 && a % 6 !== 0 && a % 7 !== 0 && a % 10 !== 0) {
        console.log('Not divisible');
    }
    if (max !== 0) {
        console.log(`The number is divisible by ${max}`);
    }
}
division(30);
division(15);
division(12);
division(1643);