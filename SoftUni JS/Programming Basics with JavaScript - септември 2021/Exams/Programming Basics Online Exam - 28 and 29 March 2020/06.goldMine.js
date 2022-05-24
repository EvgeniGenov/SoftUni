function goldMine(input) {
    let index = 0;
    let location = Number(input[index++]);


    for (let i = 0; i < location; i++) {
        let expectGoldPerDay = Number(input[index++]);
        let daysPerLocation = Number(input[index++]);

        let totalGoldPerDay = 0;
        let goldPerDay = 0;

        for (let j = 0; j < daysPerLocation; j++) {
            goldPerDay = Number(input[index++]);
            totalGoldPerDay += goldPerDay;

        }
        let average = totalGoldPerDay / daysPerLocation;

        if (average >= expectGoldPerDay) {

            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {

            console.log(`You need ${(expectGoldPerDay - average).toFixed(2)} gold.`);
        }

    }



}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"
])