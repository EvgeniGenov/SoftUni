function travelAgency(input) {
    let town = input[0];
    //"Bansko", "Borovets", "Varna" или "Burgas"
    let package = input[1];
    //("noEquipment", "withEquipment", "noBreakfast" или "withBreakfast")
    let discount = input[2];
    //"yes" или "no"
    let days = Number(input[3]);
    let price = 0;

    switch (town) {

        case 'Bansko':
        case 'Borovets':
            if (package === 'noEquipment') {
                price = 80;
                if (discount === 'yes') {
                    price = price * 0.95;
                }
            } else if (package === 'withEquipment') {
                price = 100;
                if (discount === 'yes') {
                    price = price * 0.90;
                }

            } else {
                console.log("Invalid input!");
            }
            break;

        case 'Varna':
        case 'Burgas':
            if (package === 'noBreakfast') {
                price = 100;
                if (discount === 'yes') {
                    price = price * 0.93;
                }
            } else if (package === 'withBreakfast') {
                price = 130;
                if (discount === 'yes') {
                    price = price * 0.88;
                }
            } else {
                console.log("Invalid input!");
            }
            break;

        default:
            console.log("Invalid input!");
            break;

    }

    let totalSum = days * price;

    if (days < 1) {
        console.log(`Days must be positive number!`);
    } else if (days > 7) {
        totalSum = (days - 1) * price;

    }
    if (totalSum > 0) {

        console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Bansko",
    "withEquipment",
    "no",
    "2"
])