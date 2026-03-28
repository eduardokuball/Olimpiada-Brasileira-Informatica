function upgradeHeights(matrix, lines, columns) {
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] < 9) matrix[i][j]++;
            else matrix[i][j] = 0;
        }
    }
}

export default function jumps(matrix) {
    const lines = matrix.length;
    const columns = matrix[0].length;

    let currentX = 0;
    let currentY = 0;
    let turns = 0;

    while (true) {
        if (
            currentX + 1 < lines &&
            matrix[currentX + 1][currentY] <= matrix[currentX][currentY] + 1
        ) {
            currentX++;
        }
        else if (
            currentY + 1 < columns &&
            matrix[currentX][currentY + 1] <= matrix[currentX][currentY] + 1
        ) {
            currentY++;
        }
        else if (
            currentY - 1 >= 0 &&
            matrix[currentX][currentY - 1] <= matrix[currentX][currentY] + 1
        ) {
            currentY--;
        }
        else if (
            currentX - 1 >= 0 &&
            matrix[currentX - 1][currentY] <= matrix[currentX][currentY] + 1
        ) {
            currentX--;
        }

        turns++;
        upgradeHeights(matrix, lines, columns);

        if (currentX === lines - 1 && currentY === columns - 1) {
            break;
        }
    }

    return turns;
}