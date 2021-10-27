function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let goal = 10000;
    let steps = 0;
    let totalSteps = 0;


    while (command !== 'Going home') {
        steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${Math.abs(totalSteps-goal)} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === 'Going home') {
        let stepsToHome = Number(input[index]);
        index++;
        totalSteps += stepsToHome;


        if (totalSteps < goal) {

            console.log(`${Math.abs(totalSteps-goal)} more steps to reach goal.`);
        } else {

            console.log('Goal reached! Good job!');
            console.log(`${Math.abs(totalSteps-goal)} steps over the goal!`);
        }
    }

}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
])