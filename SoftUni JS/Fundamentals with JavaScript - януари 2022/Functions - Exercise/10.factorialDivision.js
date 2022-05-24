function factorialDivision(num1, num2) {

    function factorial(num) {
        let result = 1;
        for (let i = num; i > 0; i--) {
            result *= i;
        }
        return result;
    }

    function divideFactorialResult(num1, num2) {
        return factorial(num1) / factorial(num2);

    }
    console.log(divideFactorialResult(num1, num2).toFixed(2));

}

factorialDivision(5, 2);
factorialDivision(6, 2);