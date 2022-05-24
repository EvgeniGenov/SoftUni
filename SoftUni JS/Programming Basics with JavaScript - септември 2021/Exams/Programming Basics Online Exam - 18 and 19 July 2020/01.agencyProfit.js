function agencyProfit(input) {
    let nameAircompany = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let priceAdultTicket = Number(input[3]);
    let serviceFee = Number(input[4]);

    let priceChildrenTicket = priceAdultTicket * 0.30 + serviceFee;
    let priceAdultTicketFee = priceAdultTicket + serviceFee;

    let totalPrices = adultTickets * priceAdultTicketFee + childrenTickets * priceChildrenTicket;
    let profit = totalPrices * 0.20;

    console.log(`The profit of your agency from ${nameAircompany} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"
])