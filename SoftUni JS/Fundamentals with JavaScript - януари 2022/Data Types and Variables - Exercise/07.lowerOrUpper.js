function lowerOrUpper(letter) {

    if (/[a-z]/.test(letter)) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}
lowerOrUpper('L')