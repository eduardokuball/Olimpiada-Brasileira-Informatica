export default function validateBalls(balls) {
    const counter = new Array(10).fill(0);

    for (const b of balls) {
        counter[b]++;
        if (counter[b] > 4) {
            return 'N';
        }
    }

    return 'S';
}