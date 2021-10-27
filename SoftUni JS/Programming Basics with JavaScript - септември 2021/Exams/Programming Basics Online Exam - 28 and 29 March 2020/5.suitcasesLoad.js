function suitcasesLoad(input) {
    let index = 0;
    let trunk = Number(input[index++])
    let command = input[index++];
    let total = 0;
    let counter = 0;

    while (command !== "End") {

        let suitcase = Number(command);
        counter++;

        if (counter % 3 === 0) {

            total += suitcase * 1.10;
        } else {
            total += suitcase;
        }
        if (trunk < total) {
            counter--;
            break;
        }
        command = input[index++];

    }

    if (total > trunk) {
        console.log(`No more space!`);
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${counter} suitcases loaded.`);
}