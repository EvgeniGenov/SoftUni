function theLift(input) {
    let people = Number(input.shift());
    let lift = input.shift().split(' ').map(Number);

    for (let i = 0; i < lift.length; i++) {

        while (lift[i] < 4 && people > 0) {

            lift[i] += 1;
            people -= 1;
        }
    }

    let maxSeats = lift.length * 4;
    let allSeats = lift.reduce((a, b) => a + b);


    if (maxSeats > allSeats) {
        console.log('The lift has empty spots!');
        console.log(lift.join(' '));

    } else if (!lift.includes(0) && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(' '));

    } else if (!lift.includes(0) && people === 0) {
        console.log(lift.join(' '));

    }

}


theLift([
    "15",
    "0 0 0 0"
]);
// theLift([
//     "20",
//     "0 2 0"
// ]);