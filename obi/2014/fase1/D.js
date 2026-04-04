export default function calculateMinimumMoves(pinsHeights = [], targetHeight) {
    const pins = [...pinsHeights];
    let moves = 0;

    for (let i = 0; i < pins.length - 1; i++) {

        const diff = targetHeight - pins[i];

        if (diff !== 0) {
            pins[i] += diff;
            pins[i + 1] += diff;
            moves += Math.abs(diff);
        }
    }

    return moves;
}