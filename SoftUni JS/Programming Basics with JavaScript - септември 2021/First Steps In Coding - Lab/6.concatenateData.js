function concatenateData(input) {
    let name = input[0];
    let family = input[1];
    let age = Number(input[2]);
    let town = input[3];


    console.log(`You are ${name} ${family}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Maria', 'Ivanova', 25, 'Sliven'])