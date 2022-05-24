function softUniReception(input) {

    let answerPerHour1 = Number(input.shift());
    let answerPerHour2 = Number(input.shift());
    let answerPerHour3 = Number(input.shift());
    let allStud = Number(input.shift());
    let allPerHour = answerPerHour1 + answerPerHour2 + answerPerHour3;
    let hour = 0;

    while (Number(allStud) > 0) {
        allStud -= allPerHour;
        hour++;

        if (hour % 4 === 0) {
            hour++;
        }
    }

    console.log(`Time needed: ${hour}h.`);

}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);