function oscarsWeekInCinema(input) {
    let movie = input[0];
    let typeOfHall = input[1];
    let tickets = Number(input[2]);
    let totalProfit = 0;


    //"A Star Is Born", "Bohemian Rhapsody","Green Book", "The Favourite"
    //"normal", "luxury", "ultra luxury"

    switch (typeOfHall) {
        case 'normal':

            if (movie === 'A Star Is Born') {
                totalProfit = tickets * 7.50;
            } else if (movie === 'Bohemian Rhapsody') {
                totalProfit = tickets * 7.35;
            } else if (movie === 'Green Book') {
                totalProfit = tickets * 8.15;
            } else if (movie === 'The Favourite') {
                totalProfit = tickets * 8.75;
            }

            break;

        case 'luxury':
            if (movie === 'A Star Is Born') {
                totalProfit = tickets * 10.50;
            } else if (movie === 'Bohemian Rhapsody') {
                totalProfit = tickets * 9.45;
            } else if (movie === 'Green Book') {
                totalProfit = tickets * 10.25;
            } else if (movie === 'The Favourite') {
                totalProfit = tickets * 11.55;
            }

            break;

        case 'ultra luxury':
            if (movie === 'A Star Is Born') {
                totalProfit = tickets * 13.50;
            } else if (movie === 'Bohemian Rhapsody') {
                totalProfit = tickets * 12.75;
            } else if (movie === 'Green Book') {
                totalProfit = tickets * 13.25;
            } else if (movie === 'The Favourite') {
                totalProfit = tickets * 13.95;
            }

            break;
    }

    console.log(`${movie} -> ${totalProfit.toFixed(2)} lv.`);

}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"
])