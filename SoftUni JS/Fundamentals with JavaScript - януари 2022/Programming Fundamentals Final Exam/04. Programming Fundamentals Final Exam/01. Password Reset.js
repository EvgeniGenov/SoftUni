function solve(input) {

    let pass = input.shift();
    let newPass = '';

    while (input[0] !== 'Done') {

        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == 'TakeOdd') {

            for (let i = 0; i < pass.length; i++) {
                if (i % 2 !== 0) {
                    newPass += pass[i];
                }
            }
            pass = newPass;
            console.log(pass);

        } else if (command == 'Cut') {
            let startIndex = Number(p1);
            let endIndex = Number(p1) + Number(p2);
            let left = pass.substring(0, startIndex);
            let right = pass.substring(endIndex);
            pass = left + right;
            console.log(pass);

        } else if (command == 'Substitute') {

            if (pass.includes(p1)) {

                pass = pass.split(p1).join(p2);
                console.log(pass);

            } else {
                console.log('Nothing to replace!');
            }
        }
    }
    console.log(`Your password is: ${pass}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
// solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"
// ]);