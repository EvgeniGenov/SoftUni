function maxSequenceOfEqualElements(arr) {

    let arrLength = arr.length;
    let output = [];
    let longestOutput = [];

    for (let i = 0; i < arrLength; i++) {

        for (let j = i + 1; j < i + 2; j++) {

            if (arr[i] !== arr[i - 1]) {
                output = [];
            }

            if (arr[i] === arr[j]) {
                output.push(arr[i]);
            } else if (arr[i] === arr[i - 1]) {
                output.push(arr[i]);
                if (output.length > longestOutput.length) {
                    longestOutput = output;

                }
            }
        }
    }
    console.log(longestOutput.join(' '));
}
maxSequenceOfEqualElements([4, 4, 4, 4]);