function solve(input) {

    let text = input.shift();

    while (input[0] != "Decode") {

        let tokens = input.shift().split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === 'Move') {
            let start = text.substring(0, +p1);
            let end = text.substring(+p1);
            text = end + start;

        } else if (command === 'Insert') {
            let first = text.substring(0, +p1);
            let last = text.substring(+p1);
            text = first + p2 + last;

        } else if (command === 'ChangeAll') {
            text = text.split(p1).join(p2);

        }

    }
    console.log(`The decrypted message is: ${text}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);