function simpleCalculator(number1, number2, operator) {
    let result = 0;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;

    switch (operator) {

        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
    }

    console.log(result);

}
simpleCalculator(5, 5, 'multiply');