function solve(pies, start, end) {

    const startIndex = pies.indexOf(start);
    const endIndex = pies.indexOf(end) + 1;

    console.log(pies.slice(startIndex, endIndex));


}
solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
)