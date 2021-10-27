function pcStore(input) {
    let priceProcesor = Number(input[0]);
    let priceVideocard = Number(input[1]);
    let priceRam = Number(input[2]);
    let numberRam = Number(input[3]);
    let percentage = Number(input[4]);
    let dolar = 1.57;

    let discountProcesor = priceProcesor * percentage;
    let sumProcesor = priceProcesor - discountProcesor;
    let sumRam = priceRam * numberRam;
    let discountVideocard = priceVideocard * percentage;
    let sumVideocard = priceVideocard - discountVideocard;
    let totalSum = (sumProcesor + sumRam + sumVideocard) * dolar;

    console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);

}
pcStore(['500',
    '200',
    '80',
    '2',
    '0.05'
])