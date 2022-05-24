function solve(numsAsStrings) {

    let first = [...numsAsStrings].shift();
    let last = [...numsAsStrings].pop();
    const result = Number(first) + Number(last);
    console.log(result);

}
solve(['20', '30', '40']);