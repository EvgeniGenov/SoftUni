function hairSalon(input) {
    let index = 0;
    let target = Number(input[index])
    index++;
    let command = input[index];
    index++;
    let budget = 0;

    while (command !== 'closed') {
        let service = command;
        let sex = '';
        let type = '';

        switch (service) {

            case 'haircut':
                sex = input[index++];

                if (sex === 'mens') {
                    budget += 15;
                } else if (sex === 'ladies') {
                    budget += 20;
                } else if (sex === 'kids') {
                    budget += 10;
                }

                break;

            case 'color':
                type = input[index++];

                if (type === 'touch up') {
                    budget += 20;
                } else if (type === 'full color') {
                    budget += 30;
                }

                break;

        }
        if (budget >= target) {
            break;
        }
        command = input[index++];
    }

    let diff = Math.abs(target - budget);

    if (budget >= target) {
        console.log(`You have reached your target for the day!`);
    } else {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${budget}lv.`);

}
hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"
])