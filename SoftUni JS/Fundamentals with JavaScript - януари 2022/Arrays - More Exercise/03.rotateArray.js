function rotateArray(arr) {
    let step = arr.pop();
    let element = '';

    for (let i = 0; i < step; i++) {

        element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);