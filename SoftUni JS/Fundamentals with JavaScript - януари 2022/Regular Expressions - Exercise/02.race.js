function race(input) {

    let racers = {};
    let names = input.shift().split(', ');

    for (let line of input) {

        if (line !== 'end of race') {

            let racerName = line.match(/(?<name>[A-Za-z]+)/gmi).join('');

            let distanceInDigits = line.match(/\d/g);

            let distance = 0;

            for (let meter of distanceInDigits) {
                distance += +meter;
            }

            if (names.includes(racerName)) {
                if (racers.hasOwnProperty(racerName)) {
                    racers[racerName] += distance;
                } else {
                    racers[racerName] = distance;
                }
            }

        }

    }

    let sortedarray = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${sortedarray[0]}\n2nd place: ${sortedarray[1]}\n3rd place: ${sortedarray[2]}`);


}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);