function school(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litters = Number(input[2]);
    let discount = Number(input[3]);

    let result = pens * 5.80 + markers * 7.20 + litters * 1.20;
    let bill = result - (result * discount / 100);

    console.log(bill);


}

school(["4", "2", "5", "13"])