function login(input) {
    let username = input[0];
    let pass = username.split("").reverse().join("");
    let count = 0;


    for (let i = 1; i < input.length; i++) {

        if (input[i] !== pass) {
            console.log('Incorrect password. Try again.');
            count++;
            if (count === 3) {
                break;
            }
        } else {
            console.log(`User ${username} logged in.`);
        }

    }

    if (count === 3) {
        console.log(`User ${username} blocked!`);

    }


}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['momo', 'omom']);