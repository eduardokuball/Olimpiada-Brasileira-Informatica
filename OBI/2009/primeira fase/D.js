function calculateEuclideanDistance(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function checkDisplacement(registers, maximumDistance) {
    let x = 0;
    let y = 0;
    let isRape = false;

    for (let i = 0; i < registers; i++) {
        const [direction, distance] = prompt()
            .split(' ');
        const dist = Number(distance);

        if (direction === "N") {
            y += dist;
        } else if (direction === "S") {
            y -= dist;
        } else if (direction === "O") {
            x -= dist;
        } else if (direction === "L") {
            x += dist;
        }

        const euclideanDistance = calculateEuclideanDistance(x, y);

        if (euclideanDistance > maximumDistance) {
            isRape = true;
            break;
        }
    }

    return isRape;
}

const [registers, maximumDistance] = prompt()
    .split(' ')
    .map(e =>parseInt(e));

const isRape = checkDisplacement(registers, maximumDistance);

console.log(isRape ? 1 : 0);
