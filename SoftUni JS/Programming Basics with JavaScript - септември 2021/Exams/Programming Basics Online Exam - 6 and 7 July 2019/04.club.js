function club(input) {
    let index = 0;
    let target = Number(input[index++]);
    let command = input[index++];
    let price = 0;
    let total = 0;

    while (command !== "Party!") {
        let name = command;
        let coctails = Number(input[index++]);

        price = Number(name.length);

        let totalPrice = price * coctails;

        if (totalPrice % 2 !== 0) {
            totalPrice = totalPrice * 0.75;
        }
        total += totalPrice;

        if (total >= target) {
            console.log("Target acquired.");
            break;
        }

        command = input[index++];
    }

    let diff = Math.abs(total - target);

    if (target > total) {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${total.toFixed(2)} leva.`);
}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"
])