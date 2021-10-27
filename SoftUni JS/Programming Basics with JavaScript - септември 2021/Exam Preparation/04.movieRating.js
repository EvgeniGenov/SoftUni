function rating(input) {
    let index = 0;
    let movies = Number(input[index]);
    index++;
    let totalRate = 0;
    let nameMovieMax = "";
    let nameMovieMin = "";
    let maxRate = Number.MIN_SAFE_INTEGER;
    let minRate = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < movies; i++) {
        let name = input[index];
        index++;
        let rate = Number(input[index]);
        index++;

        totalRate += rate;

        if (rate > maxRate) {
            maxRate = rate;
            nameMovieMax = name;
        }
        if (rate < minRate) {
            minRate = rate;
            nameMovieMin = name;
        }
    }

    let average = totalRate / movies;

    console.log(`${nameMovieMax} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${nameMovieMin} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${average.toFixed(1)}`);
}
rating([
    "5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
]);