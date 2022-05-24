function cinemaVoucher(input) {
    let index = 0;
    let voucher = Number(input[index++]);
    let command = input[index++];
    let ticket = 0;
    let otherBuy = 0;
    let price = 0;

    while (command !== 'End') {
        let buy = command;

        if (buy.length > 8) {
            price = buy.charCodeAt(0) + buy.charCodeAt(1);
            if (price <= voucher) {
                voucher = voucher - price;
                ticket++;
            } else {
                break;
            }

        } else if (buy.length <= 8) {
            price = buy.charCodeAt(0)
            if (price <= voucher) {
                voucher = voucher - price;
                otherBuy++;
            } else {
                break;
            }

        }
        command = input[index++];


    }
    console.log(ticket);
    console.log(otherBuy);

}
cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"
])