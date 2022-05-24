function oscarsCeremony(input) {

    let rent = Number(input[0]);
    let oscars = rent * 0.70;
    let catering = oscars * 0.85;
    let sounds = catering * 0.50;

    let total = rent + oscars + catering + sounds;

    console.log(total.toFixed(2));

}
oscarsCeremony(["5555"])