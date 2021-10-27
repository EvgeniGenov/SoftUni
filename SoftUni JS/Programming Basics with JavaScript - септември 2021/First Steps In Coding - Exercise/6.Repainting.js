function repainting(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let result = (naylon + 2) * 1.50 + (paint + (paint * 0.1)) * 14.50 + thinner * 5.00 + 0.40;
    let painter = (result * 0.3) * hours;
    let bill = result + painter;

    console.log(bill);

}

repainting(["5",
    "10",
    "10",
    "1"
])