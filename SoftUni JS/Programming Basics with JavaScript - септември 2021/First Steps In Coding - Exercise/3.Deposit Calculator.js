function deposit(input) {
    let depositAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let percent = Number(input[2]);

    let profit = depositAmount + depositPeriod * ((depositAmount * percent / 100) / 12);

    console.log(profit);
}

deposit(["2350",
    "6",
    "7"
])