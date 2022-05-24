function memoryGame(input) {

    let memoryLine = input.shift().split(' ');
    let moves = 0;

    while (input[0] !== 'end') {

        moves++;
        let memoryIndex = input.shift().split(' ');
        memoryIndex.sort((a, b) => a - b);
        let index1 = memoryIndex[0];
        let index2 = memoryIndex[1];


        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 > memoryLine.length - 1 || index2 > memoryLine.length - 1) {

            memoryLine.splice(memoryLine.length / 2, 0, '-' + moves + 'a', '-' + moves + 'a');
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;
        }


        if (memoryLine[index1] === memoryLine[index2]) {

            console.log(`Congrats! You have found matching elements - ${memoryLine[index1]}!`);

            let element = memoryLine[index1];
            let firstElementToRemove = memoryLine.indexOf(element);
            memoryLine.splice(firstElementToRemove, 1);
            let secondElementToRemove = memoryLine.indexOf(element);
            memoryLine.splice(secondElementToRemove, 1);

        } else {
            console.log('Try again!');
        }
        if (memoryLine.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

    }

    if (memoryLine.length > 0) {
        console.log('Sorry you lose :(');
        console.log(`${memoryLine.join(' ')}`);
    }

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);