function movie(input) {
    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceForTicket = Number(input[3]);
    let percentage = Number(input[4]);
    let profit = days * tickets * priceForTicket;
    let cinema = profit * percentage / 100;
    let diff = Math.abs(profit - cinema);

    console.log(`The profit from the movie ${movie} is ${diff.toFixed(2)} lv.`)

}
movie(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"
])