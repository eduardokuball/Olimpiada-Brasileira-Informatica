export default function calculateMinimumMoves(values = []) {
    const [currentA, currentB, finalA, finalB] = values;

    if (currentA !== finalA && currentB !== finalB) {
        return 1;
    } else if (currentA !== finalA && currentB === finalB) {
        return 1;
    }

    return 2;
}