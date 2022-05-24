function maxNumber(arr) {

    let result = [];
    while (arr.length !== 0) {
        let [current, biggest] = [arr.shift(), Math.max(...arr)]
        if (current > biggest) result.push(current);
    }


    console.log((result.join(' ')));

}
maxNumber([27, 19, 42, 2, 13, 45, 48]);