function employees(arr) {

    for (let i = 0; i < arr.length; i++) {

        let employeesNames = {
            employeeName: arr[i],
            personalNum: Number(arr[i].length),
        }

        // console.log(`Name: ${employeesNames.employeeName} -- Personal Number: ${employeesNames.personalNum}`);
    }
    console.log(`${employeesNames.personalNum}`);

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);