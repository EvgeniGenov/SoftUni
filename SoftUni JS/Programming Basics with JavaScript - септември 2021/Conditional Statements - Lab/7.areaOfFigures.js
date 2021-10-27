function areaOfFigures(input) {
    let figure = input[0];
    //square, rectangle, circle, triangle

    if (figure === "square") {
        let length = Number(input[1]);
        let areaOfSquare = length * length;
        console.log(areaOfSquare.toFixed(3));
    } else if (figure === "rectangle") {
        let length1 = Number(input[1]);
        let length2 = Number(input[2]);

        let areaOfRectangle = length1 * length2;
        console.log(areaOfRectangle.toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);

        let areaOfCircle = Math.PI * radius * radius;
        console.log(areaOfCircle.toFixed(3));
    } else if (figure === "triangle") {
        let height = Number(input[1]);
        let width = Number(input[2]);
        let areaOfTriangle = (height * width) / 2;

        console.log(areaOfTriangle.toFixed(3));

    }



}
areaOfFigures(["triangle",
    "4.5",
    "20"
])