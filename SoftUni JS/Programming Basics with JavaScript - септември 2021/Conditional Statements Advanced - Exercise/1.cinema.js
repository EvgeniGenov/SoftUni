function cinema(input) {
    let typeOfTicket = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (typeOfTicket === "Premiere") {
        income = rows * columns * 12;

    } else if (typeOfTicket === 'Normal') {
        income = rows * columns * 7.50;

    } else {
        income = rows * columns * 5;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Discount",
    "12",
    "30"
])