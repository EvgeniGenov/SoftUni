function salary(input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let netSalary = Number(input[index]);
    index++;
    let isHaveMoney = true;

    for (let i = 1; i <= tabs; i++) {
        let currentOpenTab = input[index];
        index++;

        if (currentOpenTab === 'Facebook') {
            netSalary -= 150;

        } else if (currentOpenTab === 'Instagram') {
            netSalary -= 100;

        } else if (currentOpenTab === 'Reddit') {
            netSalary -= 50;
        }

        if (netSalary <= 0) {
            isHaveMoney = false;
            console.log('You have lost your salary.');
            break;
        }

    }
    if (isHaveMoney) {
        console.log(`${netSalary}`);
    }

}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])