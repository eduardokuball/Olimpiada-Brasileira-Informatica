function calculateEuclideanDistance(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export default function didExceedMaximumDistance(registers, maximumDistance, movements) {
    let x = 0;
    let y = 0;
    let exceeded = false;

    for (let i = 0; i < registers; i++) {
        const [direction, distance] = movements[i];
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
            exceeded = true;
            break;
        }
    }

    return exceeded;
}