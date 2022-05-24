function renovation(input) {
    let index = 0;
    let height = Number(input[index++]);
    let width = Number(input[index++]);
    let percentage = Number(input[index++]);
    let areaRoom = height * width * 4;
    let percentageWindows = areaRoom * percentage / 100;
    let area = Math.ceil(areaRoom - percentageWindows);
    let command = input[index++];

    let painting = area;

    while (command !== "Tired!") {
        let liters = Number(command);

        painting -= liters;

        if (painting <= 0) {
            break;
        }

        command = input[index++];

    }
    if (painting > 0) {
        console.log(`${painting} quadratic m left.`);

    } else if (painting < 0) {
        console.log(`All walls are painted and you have ${Math.abs(painting)} l paint left!`);

    } else if (painting === 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }

}
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"
])