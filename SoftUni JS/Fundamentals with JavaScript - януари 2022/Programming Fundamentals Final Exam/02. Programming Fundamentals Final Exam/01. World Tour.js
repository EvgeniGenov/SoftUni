function solve(input) {

    let stops = input.shift();


    while (input[0] != 'Travel') {

        let tokens = input.shift().split(':');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];


        if (command === 'Add Stop') {

            if (stops[+p1] != undefined) {

                let left = stops.substring(0, p1);
                let right = stops.substring(p1);
                stops = left + p2 + right;

            }
            console.log(stops);

        } else if (command === 'Remove Stop') {

            if (stops[+p1] != undefined && stops[+p2] != undefined) {
                let indexEnd = Number(p2) + 1;
                let part = stops.substring(+p1, indexEnd);
                stops = stops.split(part).join('');

            }
            console.log(stops);

        } else if (command === 'Switch') {

            stops = stops.split(p1).join(p2);
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);