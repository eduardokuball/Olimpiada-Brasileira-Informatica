export default function findFinalPosition(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [0, 0],
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
    ];

    let startRow = 0;
    let startCol = 0;

    for (let i = 0; i < rows; i++) {
        const colO = grid[i].indexOf('o');
        if (colO !== -1) {
            startRow = i;
            startCol = colO;
        }
    }

    let currentRow = startRow;
    let currentCol = startCol;
    let currentDirection = 0;

    while (true) {
        let found = false;

        for (let i = 1; i <= 4; i++) {
            if (i !== currentDirection) {
                const nextRow = currentRow + directions[i][0];
                const nextCol = currentCol + directions[i][1];

                if (
                    nextRow >= 0 && nextRow < rows &&
                    nextCol >= 0 && nextCol < cols
                ) {
                    if (grid[nextRow][nextCol] === 'H') {
                        currentDirection = (i % 2 === 0) ? i - 1 : i + 1;
                        currentRow = nextRow;
                        currentCol = nextCol;
                        found = true;
                    }
                }
            }
        }

        if (!found) break;
    }

    return [currentRow + 1, currentCol + 1];
}