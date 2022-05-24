function solve(input) {

    let n = Number(input.shift());

    let plants = {};
    while (n > 0) {
        n--;
        let tokens = input.shift().split('<->');
        let plant = tokens[0];
        let rarity = tokens[1];

        plants[plant] = {
            rarity: Number(rarity),

        };
        // plants[plant]['rarity'] = rarity;

    }

    while (input[0] != 'Exhibition') {

        let tokens = input.shift().split(' - ');

        let tokens2 = tokens[0].split(': ');
        let command = tokens2[0];
        let plant = tokens2[1];
        let p1 = Number(tokens[1]);

        if (command === 'Rate') {

            if (plants.hasOwnProperty(plant)) {

                if (!plants[plant].hasOwnProperty('raiting')) {
                    plants[plant]['raiting'] = [];
                    plants[plant]['raiting'].push(p1);

                } else {
                    plants[plant]['raiting'].push(p1);

                }
            } else {
                console.log('error');
            }

        } else if (command === 'Update') {
            if (plants.hasOwnProperty(plant)) {

                plants[plant]['rarity'] = p1;

            } else {
                console.log('error');
            }


        } else if (command === 'Reset') {
            if (plants.hasOwnProperty(plant)) {

                delete plants[plant]['raiting'];

            } else {
                console.log('error');
            }

        }

    }

    console.log(plants);


    console.log('Plants for the exhibition:');

    for (let plant in plants) {

        let average = 0;
        let raitingArr = plants[plant]['raiting'];
        if (plants[plant]['raiting'] == undefined) {
            average = 0;
        } else {
            average = raitingArr.reduce((sum, el) => { return sum + el }, 0);
            average = average / raitingArr.length;
        }

        console.log(`- ${plant}; Rarity: ${plants[plant]['rarity']}; Rating: ${average.toFixed(2)}`);
    }

}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);