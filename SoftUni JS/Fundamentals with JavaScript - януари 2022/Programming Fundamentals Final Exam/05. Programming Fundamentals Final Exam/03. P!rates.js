function solve(input) {

    let cities = {};

    while (input[0] !== "Sail") {

        let tokens = input.shift().split('||');
        let city = tokens[0];
        let population = tokens[1];
        let gold = tokens[2];

        if (cities.hasOwnProperty(city)) {
            cities[city]['population'] += +population;
            cities[city]['gold'] += +gold;

        } else {

            cities[city] = {};
            cities[city]['population'] = +population;
            cities[city]['gold'] = +gold;
        }

    }

    while (input[0] !== 'End') {

        let tokens = input.shift().split('=>');
        if (tokens[0] === 'Sail') {
            continue;
        }

        let command = tokens[0];


        if (command === 'Plunder') {

            let city = tokens[1];
            let population = tokens[2];
            let gold = tokens[3];

            if (cities.hasOwnProperty(city)) {

                cities[city]['population'] -= +population;
                cities[city]['gold'] -= +gold;


                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                if (cities[city]['population'] <= 0 || cities[city]['gold'] <= 0) {

                    delete cities[city];
                    console.log(`${city} has been wiped off the map!`);
                }

            }

        }
        if (command === 'Prosper') {

            let city = tokens[1];
            let gold = tokens[2];

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                continue;
            } else {
                cities[city]['gold'] += +gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city]['gold']} gold.`);
            }

        }

    }

    if (Object.keys(cities) !== undefined) {

        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);

        let keys = Object.keys(cities);

        for (let key of keys) {
            console.log(`${key} -> Population: ${cities[key]['population']} citizens, Gold: ${cities[key]['gold']} kg`);
        }

    }
}
// solve(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);
solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);