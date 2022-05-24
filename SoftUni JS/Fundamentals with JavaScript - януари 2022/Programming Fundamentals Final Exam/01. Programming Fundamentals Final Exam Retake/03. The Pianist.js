function solve(input) {

    let n = input.shift();

    let pieces = {};

    while (n > 0) {
        n--;

        let tokens = input.shift().split('|');
        let nameOfPiece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];


        if (!pieces.hasOwnProperty(nameOfPiece)) {
            pieces[nameOfPiece] = [];
            pieces[nameOfPiece].push(composer);
            pieces[nameOfPiece].push(key);
        } else {
            break;
        }
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        if (command === 'Add') {

            if (!pieces.hasOwnProperty(p1)) {

                pieces[p1] = [];
                pieces[p1].push(p2);
                pieces[p1].push(p3);

                console.log(`${p1} by ${p2} in ${p3} added to the collection!`);

            } else {
                console.log(`${p1} is already in the collection!`);
            }

        } else if (command === 'Remove') {

            if (pieces[p1] != undefined) {

                delete pieces[p1];
                console.log(`Successfully removed ${p1}!`);

            } else {
                console.log(`Invalid operation! ${p1} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {

            if (pieces.hasOwnProperty(p1)) {

                pieces[p1].pop();
                pieces[p1].push(p2);

                console.log(`Changed the key of ${p1} to ${p2}!`);

            } else {
                console.log(`Invalid operation! ${p1} does not exist in the collection.`);
            }
        }
    }

    for (let piece in pieces) {

        console.log(`${piece} -> Composer: ${pieces[piece][0]}, Key: ${pieces[piece][1]}`);
    }

}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);