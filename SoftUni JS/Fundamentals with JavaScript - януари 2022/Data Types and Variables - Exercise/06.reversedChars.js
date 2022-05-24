function reversedChars(a, b, c) {
    let inputString = a + b + c;
    let result = inputString.split('').reverse().join(' ');
    console.log(result);

}
reversedChars('1',
    'L',
    '&'
)