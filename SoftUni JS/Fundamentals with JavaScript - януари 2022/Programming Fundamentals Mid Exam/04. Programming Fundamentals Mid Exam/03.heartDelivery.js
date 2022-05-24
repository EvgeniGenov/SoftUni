function heartDelivery(arr) {

    let houses = arr.shift().split('@').map(Number);
    let cupidonIndexOf = 0;
    let houseValentine = 0;


    while (arr[0] !== 'Love!') {

        let tokens = arr.shift().split(' ');
        let length = Number(tokens[1]);
        cupidonIndexOf += length;

        if (cupidonIndexOf >= houses.length) {
            cupidonIndexOf = 0;
        }


        if (houses[cupidonIndexOf] == 0) {
            console.log(`Place ${cupidonIndexOf} already had Valentine's day.`);

        } else {

            houses[cupidonIndexOf] -= 2;
            if (houses[cupidonIndexOf] == 0) {

                console.log(`Place ${cupidonIndexOf} has Valentine's day.`);
            }

        }

    }

    for (let house of houses) {
        if (house > 0) {
            houseValentine++;
        }
    }

    console.log(`Cupid's last position was ${cupidonIndexOf}.`);

    if (houseValentine > 0) {
        console.log(`Cupid has failed ${houseValentine} places.`);

    } else {
        console.log('Mission was successful.');

    }

}
// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"
// ]);
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);
// heartDelivery(["2@2@2",
//     "Jump 1",
//     "Jump 1",
//     "Jump 1",
//     "Love!"
// ]);