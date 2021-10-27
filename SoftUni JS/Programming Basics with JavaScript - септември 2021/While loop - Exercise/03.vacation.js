function vacation(input) {
    let index = 0;
    let moneyForTrip = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    let daySave = 0;
    let daySpend = 0;
    let totalDays = 0;
    let isMoney = true;

    while (currentMoney < moneyForTrip) {
        totalDays++;
        let action = input[index];
        index++;
        let amount = Number(input[index]);
        index++;

        if (action === 'save') {
            daySpend = 0;
            currentMoney += amount;
        } else {
            daySpend++;
            currentMoney -= amount;

            if (currentMoney < 0) {
                currentMoney = 0;
            }

        }
        if (daySpend === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            isMoney = false;
            break;


        }


    }

    if (isMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
])