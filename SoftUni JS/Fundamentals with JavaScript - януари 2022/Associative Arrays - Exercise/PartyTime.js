function solve(input) {

    let obj = {
        vipGuest: [],
        regularGuest: [],
    }

    let guest = input.shift();

    while (guest !== "PARTY") {

        if (isNaN(guest[0])) {
            obj.regularGuest.push(guest);
        } else {
            obj.vipGuest.push(guest);
        }
        guest = input.shift();
    }

    for (let guest of input) {

        if (obj.vipGuest.includes(guest)) {
            let indexOfGuest = obj.vipGuest.indexOf(guest);
            obj.vipGuest.splice(indexOfGuest, 1);

        } else if (obj.regularGuest.includes(guest)) {
            let indexOfGuest = obj.regularGuest.indexOf(guest);
            obj.regularGuest.splice(indexOfGuest, 1);
        }

    }

    let totalGuest = obj.vipGuest.length + obj.regularGuest.length;
    console.log(totalGuest);

    for (let element of obj.vipGuest) {
        console.log(element);
    }
    for (let element of obj.regularGuest) {
        console.log(element);
    }
}



solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);