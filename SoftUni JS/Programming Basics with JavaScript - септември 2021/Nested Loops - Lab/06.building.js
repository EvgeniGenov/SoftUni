function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let output = "";

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                output += `L${i}${j} `;
            } else if (i % 2 !== 0) {
                output += `A${i}${j} `;
            } else if (i % 2 === 0) {
                output += `O${i}${j} `;
            }
        }
        console.log(output);
        output = "";
    }
}
building(["6", "4"])