function change(input) {
    let bitcoin = Number(input[0]);
    let chinaYuan = Number(input[1]);
    let commission = Number(input[2]);
    let euroLeva = 1.95;
    let coursBitcoinLeva = 1168;
    let coursUsLeva = 1.76;
    let coursChinaYuanLeva = coursUsLeva * 0.15;


    let levaBitcoin = bitcoin * coursBitcoinLeva;
    let levaChinaYuan = chinaYuan * coursChinaYuanLeva;
    let total = (levaBitcoin + levaChinaYuan) / euroLeva;
    let comm = total * (commission / 100);
    let sum = total - comm;

    console.log(sum.toFixed(2));


}
change(["7",
    "50200.12",
    "3"
])