function solve(input) {

    let schoolGrades = new Map();

    for (let entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schoolGrades.has(name)) {

            let currentGrades = schoolGrades.get(name);
            let newGrades = currentGrades.push(grades);
            schoolGrades.set(name, newGrades);

        } else {
            schoolGrades.set(name, grades)
        }

    }

    let sortedSchoolGrades = Array.from(schoolGrades.entries());

    sortedSchoolGrades.sort((a, b) => averageSort(a, b));

    for (gradesEntry of sortedSchoolGrades) {
        let studentName = gradesEntry[0];
        let studentGrades = gradesEntry[1];
        console.log(`${studentName}: ${studentGrades.join(", ")}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);