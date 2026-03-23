function positiveNormalize(angle) {
    return (angle + 360) % 360;
}

export default function calculateRotations(points) {
    let playerAngle = 0;
    let angleRotateCounter = 0;

    for (let i = 0; i < points.length; i++) {
        const current = points[i];
        const next = points[(i + 1) % points.length];

        const xVariation = next.x - current.x;
        const yVariation = next.y - current.y;

        const angleRad = Math.atan2(yVariation, xVariation);
        const angleDeg = 360 - positiveNormalize(angleRad * (180 / Math.PI));

        const rotation = positiveNormalize(angleDeg - playerAngle);

        angleRotateCounter += rotation;
        playerAngle = (playerAngle + rotation) % 360;
    }

    return Math.floor(angleRotateCounter / 360);
}