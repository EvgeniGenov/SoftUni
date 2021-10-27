function sport(input) {
    let country = input[0];
    let type = input[1];
    let hardness = 0;
    let presentation = 0;
    let max = 20;

    //"Russia", "Bulgaria" или "Italy"

    switch (type) {
        case "ribbon":
            if (country === "Russia") {
                hardness += 9.1;
                presentation += 9.4;
            } else if (country === "Bulgaria") {
                hardness += 9.6;
                presentation += 9.4;
            } else if (country === "Italy") {
                hardness += 9.2;
                presentation += 9.5;
            }

            break;

        case "hoop":
            if (country === "Russia") {
                hardness += 9.3;
                presentation += 9.8;
            } else if (country === "Bulgaria") {
                hardness += 9.55;
                presentation += 9.75;
            } else if (country === "Italy") {
                hardness += 9.45;
                presentation += 9.35;
            }

            break;

        case "rope":
            if (country === "Russia") {
                hardness += 9.6;
                presentation += 9.0;
            } else if (country === "Bulgaria") {
                hardness += 9.5;
                presentation += 9.4;
            } else if (country === "Italy") {
                hardness += 9.7;
                presentation += 9.15;
            }

            break;
    }
    let total = hardness + presentation;
    let diff = Math.abs(total - max);
    let percentage = (diff / 20) * 100;
    console.log(`The team of ${country} get ${total.toFixed(3)} on ${type}.`);
    console.log(`${percentage.toFixed(2)}%`);
}
sport(["Russia", "rope"]);