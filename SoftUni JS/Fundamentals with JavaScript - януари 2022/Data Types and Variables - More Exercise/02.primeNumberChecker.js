function primeNumberChecker(num1) {
    let isPrime = true;

    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            isPrime = false;
        }

    }
    if (isPrime) {
        console.log("true");
    } else {
        console.log("false");
    }
}
primeNumberChecker(8);