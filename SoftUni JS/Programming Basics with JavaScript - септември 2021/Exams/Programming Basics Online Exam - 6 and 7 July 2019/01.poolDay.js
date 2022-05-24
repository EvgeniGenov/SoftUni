function poolDay(input) {

    let people = Number(input[0]);
    let entryFee = Number(input[1]);
    let cheslong = Number(input[2]);
    let sunUmbrella = Number(input[3]);

    let total = people * entryFee + Math.ceil(people / 2) * sunUmbrella + cheslong * Math.ceil(people * 0.75);

    console.log(`${total.toFixed(2)} lv.`);

}
poolDay(["21",
    "5.50",
    "4.40",
    "6.20"
])