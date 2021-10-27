function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index++]);
    let musala = 0;
    let monblanch = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i <= groups; i++) {

        let people = Number(input[index++]);

        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monblanch += people;
        } else if (people >= 13 && people <= 25) {
            kilimandzharo += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else if (people >= 41) {
            everest += people;
        }
    }
    let total = musala + monblanch + kilimandzharo + k2 + everest;

    console.log(`${(musala / total * 100).toFixed(2)}%`);
    console.log(`${(monblanch / total * 100).toFixed(2)}%`);
    console.log(`${(kilimandzharo / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);

}

trekkingMania(["10", "10", "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])