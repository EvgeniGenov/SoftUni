function mountainRun(input) {
    let recordSec = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let time = distance * timePerMeter;
    let slowerTime = Math.floor(distance / 50) * 30;
    let total = time + slowerTime;

    if (total < recordSec) {
        console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(recordSec - total);
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
mountainRun(["1377",
    "389",
    "3"
])