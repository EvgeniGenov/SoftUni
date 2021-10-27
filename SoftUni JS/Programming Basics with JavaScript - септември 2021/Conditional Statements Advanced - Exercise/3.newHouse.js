function newHouse(input) {
    let typeFlower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    switch (typeFlower) {

        case 'Roses':
            price = quantity * 5.00;
            if (quantity > 80) {
                price = price * 0.90;
            }
            break;
        case 'Dahlias':
            price = quantity * 3.80;
            if (quantity > 90) {
                price = price * 0.85;
            };
            break;
        case 'Tulips':
            price = quantity * 2.80;
            if (quantity > 80) {
                price = price * 0.85;
            };
            break;
        case 'Narcissus':
            price = quantity * 3;
            if (quantity < 120) {
                price = price * 1.15;
            };
            break;
        case 'Gladiolus':
            price = quantity * 2.50;
            if (quantity < 80) {
                price = price * 1.20;
            };
            break;


    }
    let diff = Math.abs(price - budget).toFixed(2);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${typeFlower} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);

    }

}
newHouse(["Tulips",
    "88",
    "260"
])