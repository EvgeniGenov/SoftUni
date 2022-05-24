function cone(radius, height) {

    let volume = (1 / 3) * Math.PI * radius * radius * height;
    let area = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)) * Math.PI * radius + Math.PI * Math.pow(radius, 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);