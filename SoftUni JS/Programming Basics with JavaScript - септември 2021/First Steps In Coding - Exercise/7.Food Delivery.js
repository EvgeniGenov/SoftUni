function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let sum = chickenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15;

    let totalSum = sum + sum * 0.20;
    let sumWithDelivery = totalSum + 2.5;

    console.log(sumWithDelivery)

}

foodDelivery(["2", "4", "3"])