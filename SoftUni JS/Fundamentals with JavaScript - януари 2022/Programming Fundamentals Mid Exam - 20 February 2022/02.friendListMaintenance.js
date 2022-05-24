function friendListMaintenance(input) {
    let names = input.shift().split(', ');
    let blackNames = 0;
    let lostNames = 0;
    let lostNamesArr = [];

    while (input[0] !== 'Report') {

        let command = input.shift().split(' ');

        if (command[0] === 'Blacklist') {
            let name = command[1];

            if (names.includes(name)) {

                let indexOfName = names.indexOf(name);
                names.splice(indexOfName, 1, 'Blacklisted');
                blackNames++;
                console.log(`${name} was blacklisted.`);

            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command[0] === 'Error') {
            let indexOfName = command[1];
            let name = names[indexOfName];
            if (indexOfName >= 0 && indexOfName <= names.length - 1 && name !== "Blacklisted" && !lostNamesArr.includes(name) && name !== "Lost") {
                names.splice(indexOfName, 1, "Lost");
                lostNamesArr.push(name);
                lostNames++;
                console.log(`${name} was lost due to an error.`);

            }
        } else if (command[0] === 'Change') {
            let indexOfName = Number(command[1]);
            let name = command[2];

            if (indexOfName >= 0 && indexOfName <= names.length - 1) {
                let currentName = names[indexOfName];
                names.splice(indexOfName, 1, name);
                console.log(`${currentName} changed his username to ${name}.`);
            }

        }

    }
    console.log(`Blacklisted names: ${blackNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(names.join(' '));

}
// friendListMaintenance(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"
// ]);
friendListMaintenance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"
]);
// friendListMaintenance(["Mike, John, Eddie, William",
//     "Blacklist Maya",
//     "Error 1",
//     "Change 4 George",
//     "Report"
// ]);