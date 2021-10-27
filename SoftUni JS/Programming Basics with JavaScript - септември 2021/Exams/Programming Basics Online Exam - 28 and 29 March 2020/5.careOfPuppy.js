function careOfPuppy(input) {
    let index = 0;
    let quantityFood = Number(input[index++]);
    let kilogram = quantityFood * 1000;
    let command = input[index++];
    let total = 0;

    while (command !== 'Adopted') {
        let grams = Number(command);

        total += grams;

        command = input[index++];
    }

    if (total <= kilogram) {
        console.log(`Food is enough! Leftovers: ${Math.abs(total - kilogram)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(total - kilogram)} grams more.`);
    }
}
careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
])