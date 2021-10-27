function skiTrip(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rate = input[2];
    let price = 0;
    let nights = days - 1;
    let ratePrice = 0;

    // room for one person, apartment, president apartment

    switch (typeOfRoom) {
        case 'room for one person':
            price = nights * 18;
            break;
        case 'apartment':
            if (days < 10) {
                price = nights * 25 * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = nights * 25 * 0.65;
            } else if (days > 15) {
                price = nights * 25 * 0.50;
            }
            break;
        case 'president apartment':
            if (days < 10) {
                price = nights * 35 * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = nights * 35 * 0.85;
            } else if (days > 15) {
                price = nights * 35 * 0.80;
            }
            break;
    }
    if (rate === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));

}
skiTrip(["2",
    "apartment",
    "positive"
])