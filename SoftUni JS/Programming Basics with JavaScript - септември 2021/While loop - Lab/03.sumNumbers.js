function sumNumbers(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    let sumNumbers = 0;

    while (sumNumbers < number) {
        let numbers = Number(input[index]);
        index++;
        sumNumbers += numbers;

    }

    console.log(sumNumbers);



}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"
])