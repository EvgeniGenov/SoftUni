function solve(input) {

    let companies = {};


    for (let line of input) {

        let [company, employees] = line.split(' -> ')

        if (companies.hasOwnProperty(company) == false) {
            companies[company] = [];
        }

        if (companies[company].includes(employees) == false) {
            companies[company].push(employees);
        }

    }


    let sortedCompanies = Object.keys(companies);


    sortedCompanies.sort((a, b) => a.localeCompare(b));

    for (let company of sortedCompanies) {

        console.log(company);

        for (let employees of companies[company]) {
            console.log(`-- ${employees}`);
        }

    }

}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);