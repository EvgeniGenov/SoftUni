function rounding(a, b) {

    if (b > 15) {
        b = 15;
    }
    let result = a.toFixed(b);

    console.log(parseFloat(result));


}
rounding(10.5, 3)