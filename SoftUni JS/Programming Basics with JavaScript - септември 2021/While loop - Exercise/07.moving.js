function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let room = Math.floor(width * length * height);
    let command = input[index];
    index++;
    let isMoreSpace = true;

    while (command !== "Done") {
        let box = Number(command);
        room -= box;

        if (room <= 0) {
            console.log(
                `No more free space! You need ${Math.abs(room)} Cubic meters more.`
            );
            isMoreSpace = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (isMoreSpace) {
        console.log(`${room} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
])