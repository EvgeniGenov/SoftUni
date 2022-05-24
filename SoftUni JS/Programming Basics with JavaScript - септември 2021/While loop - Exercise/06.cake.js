function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let pieces = width * length;
    let command = input[index];
    index++;
    let isHavePieces = true;

    while (command !== "STOP") {
        let cake = Number(command);
        pieces -= cake;
        if (pieces <= 0) {
            console.log(
                `No more cake left! You need ${Math.abs(pieces)} pieces more.`
            );
            isHavePieces = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (isHavePieces) {
        console.log(`${pieces} pieces are left.`);
    }
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
])