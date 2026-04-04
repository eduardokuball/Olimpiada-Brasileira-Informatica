export default function calculatePenalties(coords) {
    const n = coords.length;

    const penalties = [];
    const realCoords = [];

    for (let i = 0; i < n; i++) {
        const penaltyBefore = i === 0 ? 0 : penalties[i - 1];

        const realX = coords[i].x + penaltyBefore;
        const realY = coords[i].y + penaltyBefore;

        realCoords.push({ x: realX, y: realY });

        const d = realX * realX + realY * realY;

        let p = 0;

        for (let j = 0; j < i; j++) {
            const prevX = realCoords[j].x;
            const prevY = realCoords[j].y;

            const dPrev = prevX * prevX + prevY * prevY;

            if (dPrev <= d) {
                p++;
            }
        }

        penalties.push(p);
    }

    return penalties;
}