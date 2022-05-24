function solve(input) {

    let calendar = {};

    for (let entry of input) {

        entry = entry.split(" ");
        let weekday = entry[0];
        let person = entry[1];

        //let [weekday, person] = entry.split(" ");

        if (calendar.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            calendar[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let assocKey in calendar) {
        console.log(`${assocKey} -> ${calendar[assocKey]}`);
    }

}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);