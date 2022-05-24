function computerStore(input) {
    let index = 0;
    let command = input[index++];
    let totalSum = 0;

    while (command !== 'special' && command !== 'regular') {
        let price = Number(command);
        if (price < 0) {
            console.log('Invalid price!');

        } else {
            totalSum += price;

        }
        command = input[index++];
    }


    if (totalSum === 0) {
        console.log('Invalid order!');
    } else if (command === 'special') {

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${(totalSum * 0.20).toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${((totalSum * 1.20)*0.90).toFixed(2)}$`);

    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${(totalSum * 0.20).toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${(totalSum * 1.20).toFixed(2)}$`);
    }

}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]);
// computerStore([
//     'regular'
// ]);