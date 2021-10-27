function litery(input) {

    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let result = ((pagesPerBook / pagesPerHour) / days);

    console.log(result)

}

litery(["432", "15", "4"])