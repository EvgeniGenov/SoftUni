function requiredReading(numberPages, pagesPerHour, days) {
    let totalTime = numberPages / pagesPerHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);


}
requiredReading(432,
    15,
    4
);