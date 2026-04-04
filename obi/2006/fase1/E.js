export default function redistribution(rocks) {
    const n = rocks.length;

    const total = rocks.reduce((acc, v) => acc + v, 0);

    const baseSum = (n * (n - 1)) / 2;

    if ((total - baseSum) % n !== 0) return -1;

    const x = (total - baseSum) / n;

    const perfect = Array.from({ length: n }, (_, i) => x + i);

    let moves = 0;

    for (let i = 0; i < n; i++) {
        if (rocks[i] > perfect[i]) {
            moves += rocks[i] - perfect[i];
        }
    }

    return moves;
}