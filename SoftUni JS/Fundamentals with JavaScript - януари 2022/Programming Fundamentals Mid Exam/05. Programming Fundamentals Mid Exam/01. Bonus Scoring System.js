function solve(input) {

    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let maxBonus = 0;
    let attended = 0;

    while (students > 0) {
        students--;
        let attendances = Number(input.shift());
        let totalBonus = (attendances / lectures) * (5 + bonus);

        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            attended = attendances;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attended} lectures.`);
}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])