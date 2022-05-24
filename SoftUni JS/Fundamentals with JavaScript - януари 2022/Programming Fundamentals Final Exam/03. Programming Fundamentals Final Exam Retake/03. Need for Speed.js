function solve(input) {

    let n = input.shift();
    let cars = {};

    while (n > 0) {
        n--;
        let tokens = input.shift().split('|');
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        cars[car] = {
            mileage,
            fuel
        }

    }

    while (input[0] != "Stop") {

        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);


        if (command === 'Drive') {

            if (cars[car]['fuel'] < p2) {
                console.log('Not enough fuel to make that ride');
                continue;
            } else {

                cars[car]['mileage'] += p1;
                cars[car]['fuel'] -= p2;
            }
            console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);

            if (cars[car]['mileage'] >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }



        } else if (command === 'Refuel') {



            let currentFuel = cars[car]['fuel'];
            cars[car]['fuel'] += p1;

            if (cars[car]['fuel'] > 75) {
                cars[car]['fuel'] = 75;
                p1 = 75 - currentFuel;
            }
            console.log(`${car} refueled with ${p1} liters`);



        } else if (command === 'Revert') {



            cars[car]['mileage'] -= p1;

            if (cars[car]['mileage'] < 10000) {
                cars[car]['mileage'] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${p1} kilometers`);

            }



        }

    }

    for (let car in cars) {

        console.log(`${car} -> Mileage: ${cars[car]['mileage']} kms, Fuel in the tank: ${cars[car]['fuel']} lt.`);
    }

    let p = Number('string');
    console.log(p);

    let a = 5;
    let b = a++;
    let c = ++a;
    console.log(c);

    let name = 'George';
    console.log(name.charAt(2));

    console.log(Number(true));

}


solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

// solve([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);