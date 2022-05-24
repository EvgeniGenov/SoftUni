function equalNeighbors(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrix.length - 1) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    counter++;
                }
            }
            if (j < matrix[i].length) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    counter++;
                }
            }
        }

    }
    console.log(counter);

}
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
equalNeighbors([
    ['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']
]);