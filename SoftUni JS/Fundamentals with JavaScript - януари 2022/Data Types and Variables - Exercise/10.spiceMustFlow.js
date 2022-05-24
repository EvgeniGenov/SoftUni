function spiceMustFlow(yield) {
    let days = 0;
    let totalAmount = 0;
    let workersConsume = 26;

    while (yield >= 100) {
        days++;

        totalAmount += yield;
        totalAmount -= workersConsume;

        yield -= 10;

    }
    if (totalAmount >= workersConsume) {
        totalAmount -= workersConsume;
    }
    console.log(`${days}`);
    console.log(`${totalAmount}`);


}
spiceMustFlow(100);