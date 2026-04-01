function didHitCircle(x, y, radius) {
    const distance = Math.sqrt(x ** 2 + y ** 2);
    return distance <= radius;
}

export default function calculateScore(radii = [], shots = []) {
   
    let score = 0;

    for (const [x, y] of shots) {
        if (didHitCircle(x, y, radii[0])) {
            score += 3;
        } else if (didHitCircle(x, y, radii[1])) {
            score += 2;
        } else if (didHitCircle(x, y, radii[2])) {
            score += 1;
        }
    }

    return score;
}