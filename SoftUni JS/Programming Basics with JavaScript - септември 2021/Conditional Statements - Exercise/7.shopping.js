function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let sumVideocards = videocards * 250;
    let sumProcessors = processors * sumVideocards * 0.35;
    let sumRam = ram * sumVideocards * 0.10;
    let totalSum = sumVideocards + sumProcessors + sumRam;


    if (videocards >= processors) {

        totalSum = totalSum * 0.85;
    }

    let diff = Math.abs(budget - totalSum);

    if (totalSum <= budget) {

        console.log(`You have ${diff.toFixed(2)} leva left!`);

    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);

    }

}

shopping(["900",
    "2",
    "1",
    "3"
])