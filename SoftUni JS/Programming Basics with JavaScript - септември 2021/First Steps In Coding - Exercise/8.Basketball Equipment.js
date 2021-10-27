function basketballEquipment(input) {

    let tax = Number(input[0]);

    let trainers = tax - tax * 0.4;
    let suit = trainers - trainers * 0.2;
    let ball = suit / 4;
    let acc = ball / 5;

    let result = trainers + suit + ball + acc + tax;

    console.log(result)

}

basketballEquipment(["365"])