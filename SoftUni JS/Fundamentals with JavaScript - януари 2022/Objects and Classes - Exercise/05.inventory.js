function inventory(input) {
    let heroes = [];

    for (let line of input) {
        let info = line.split(' / ')
        let name = info[0];
        let level = info[1];
        let item = info[2];

        heroes.push({ Hero: name, level: level, items: item });
    }

    let sorted = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sorted) {
        for (let key of Object.keys(hero)) {
            if (key === 'Hero') {
                console.log(`${key}: ${hero[key]}`);
            } else if (key === 'level') {
                console.log(`${key} => ${hero[key]}`);

            } else if (key === 'items') {
                console.log(`${key} => ${hero[key]}`);
            }

        }

    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);