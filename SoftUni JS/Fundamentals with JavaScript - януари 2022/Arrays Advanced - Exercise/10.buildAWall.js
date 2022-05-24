function buildAWall(string) {
    let oneCubicYard = 1900;
    let concrete = [];
    let totalSum = 0;

    for (let element of string) {

        while (element < 30) {
            let sum = 0;
            for (let i = 0; i < string.length; i++) {

                if (Number(string[i]) < 30) {
                    string[i] += 1;
                    sum += 195;
                    totalSum += 195;
                }

            }
            element++;
            concrete.push(sum);
        }
    }
    console.log(concrete.join(', '));
    console.log(`${totalSum * oneCubicYard} pesos`);
}
// buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);