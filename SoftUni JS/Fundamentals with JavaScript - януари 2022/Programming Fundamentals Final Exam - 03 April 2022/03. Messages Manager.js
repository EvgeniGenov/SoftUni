function solve(input) {

    let capacity = Number(input.shift());
    let count = 0;
    let messages = {};

    while (input[0] != 'Statistics') {

        let tokens = input.shift().split('=');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = tokens[2];
        let p2 = tokens[3];

        if (command === 'Add') {

            if (!messages.hasOwnProperty(name)) {
                count++;
                messages[name] = {
                    'sent': Number(p1),
                    'received': Number(p2)
                }
            }

        } else if (command === 'Message') {
            if (messages[name] != undefined && messages[p1] != undefined) {
                messages[name]['sent'] += 1;
                messages[p1]['received'] += 1;

                if ((messages[name]['sent'] + messages[name]['received']) >= capacity) {
                    delete messages[name];
                    count--;
                    console.log(`${name} reached the capacity!`);
                }

                if ((messages[p1]['sent'] + messages[p1]['received']) >= capacity) {
                    delete messages[p1];
                    count--;
                    console.log(`${p1} reached the capacity!`);
                }
            }

        } else if (command === 'Empty') {

            if (name === 'All') {
                for (let name in messages) {
                    delete messages[name];
                    count = 0;
                }

            } else if (messages[name] != undefined) {
                delete messages[name];
                count--;
            }
        }
    }
    console.log(`Users count: ${count}`);
    for (let name in messages) {
        console.log(`${name} - ${messages[name]['sent'] + messages[name]['received']}`);
    }

}
// solve(["10",
//     "Add=Berg=9=0",
//     "Add=Kevin=0=0",
//     "Message=Berg=Kevin",
//     "Add=Mark=5=4",
//     "Statistics"
// ]);

solve(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
])

// solve(["12",
//     "Add=Bonnie=3=5",
//     "Add=Johny=4=4",
//     "Empty=All",
//     "Add=Bonnie=3=3",
//     "Statistics"
// ])