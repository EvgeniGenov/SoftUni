function solve(speed, area) {
    let result = '';
    let speedLimit = 0;
    let diff = 0;
    let status = '';

    switch (area) {

        case 'city':
            speedLimit = 50;

            break;

        case 'residential':
            speedLimit = 20;

            break;

        case 'interstate':
            speedLimit = 90;
            break;

        case 'motorway':
            speedLimit = 130;
            break;

    }

    if (speed <= speedLimit && speed > 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        diff = speed - speedLimit;

        if (diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        result = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }
    console.log(result);
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');