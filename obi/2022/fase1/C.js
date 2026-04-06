export default function findMissingNumberInSquare(square) {
    const n = square.length;
    const expectedNumbers = new Set();

    for (let i = 1; i <= n * n; i++) {
        expectedNumbers.add(i);
    }

    let missingNumber = null;
    let position = null;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const value = square[i][j];

            if (value === 0) {
                position = [i + 1, j + 1];
            } else {
                expectedNumbers.delete(value);
            }
        }
    }

    missingNumber = [...expectedNumbers][0];

    return [missingNumber, position[0], position[1]];
}
