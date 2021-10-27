function worldSwimmingRecord(input) {
    let recordSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeSec = Number(input[2]);

    let time = meters * timeSec;
    let resistance = Math.floor(meters / 15) * 12.5;
    let totalTime = time + resistance;
    let diff = Math.abs(recordSec - totalTime);

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);

    }

}

worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"
])