export default function generateLayeredSquare(size) {
    const matrix = [];

    for (let i = 1; i <= size; i++) {
        const row = [];

        for (let j = 1; j <= size; j++) {
            const value = Math.min(
                i,
                j,
                size - i + 1,
                size - j + 1
            );

            row.push(value);
        }

        matrix.push(row);
    }

    return matrix;
}

