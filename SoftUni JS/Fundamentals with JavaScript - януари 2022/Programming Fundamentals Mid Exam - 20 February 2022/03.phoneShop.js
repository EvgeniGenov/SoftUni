function phoneShop(input) {
    let phones = input.shift().split(', ');

    while (input[0] !== 'End') {
        let command = input.shift().split(' - ');

        if (command[0] === 'Add') {
            if (!phones.includes(command[1])) {
                phones.push(command[1]);
            }
        }


        if (command[0] === 'Remove') {
            if (phones.includes(command[1])) {
                let indexOfPhone = phones.indexOf(command[1]);
                phones.splice(indexOfPhone, 1);
            }

        }

        if (command[0] === 'Bonus phone') {
            let phonesToChange = command[1];
            let phonesToChange1 = phonesToChange.split(':');

            if (phones.includes(phonesToChange1[0])) {
                let indexOfPhone = phones.indexOf(phonesToChange1[0]);

                phones.splice(indexOfPhone + 1, 0, phonesToChange1[1]);
            }

        }
        if (command[0] === 'Last') {
            if (phones.includes(command[1])) {
                let indexOfPhone = phones.indexOf(command[1]);
                let name = phones[indexOfPhone];
                phones.splice(indexOfPhone, 1);
                phones.push(name);
            }

        }
    }
    console.log(phones.join(', '));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"
]);
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"
]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"
]);