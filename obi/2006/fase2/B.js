const [lines, columns] = prompt().split(' ', 2).map(Number);
const matrix = [];

for (let i = 0; i < lines; i++) {
    const row = prompt().split('', columns);
    matrix.push(row);
}

const groups = getGroups(matrix);

console.log(matrix);
console.log(groups);

let totalWolfs = 0;
let totalSheeps = 0;

groups.forEach(g => {
    let wolfs = 0;
    let sheeps = 0;

    g.flat().forEach(e => {
        if (e === 'v') return wolfs++;
        if (e === 'k') return sheeps++;
    });

    if (sheeps > wolfs) {
        totalSheeps += sheeps;
        return;
    }

    totalWolfs += wolfs;
});

console.log(`${totalSheeps} ${totalWolfs}`);

// FUNÇÕES:

function getGroups(matrix) {
    if (matrix.length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const groups = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (isOpen(matrix, row, col) && !visited[row][col]) {
                const { bounds } = exploreRegion(matrix, row, col, visited);
                const submatrix = extractSubmatrix(matrix, bounds);
                groups.push(submatrix);
            }
        }
    }

    return groups;
}

// Vê se está aberto, ou seja não é uma cerca
function isOpen(matrix, row, col) {
    return (
        row >= 0 && row < matrix.length &&
        col >= 0 && col < matrix[0].length &&
        matrix[row][col] !== '#'
    );
}

// faz o DFS
function exploreRegion(matrix, startRow, startCol, visited) {
    const directions = [
        [1, 0], // down
        [-1, 0], // up
        [0, 1], // right
        [0, -1], // left
    ];

    const queue = [[startRow, startCol]];
    visited[startRow][startCol] = true;

    let minRow = startRow;
    let maxRow = startRow;
    let minCol = startCol;
    let maxCol = startCol;
    const regionCells = [];

    while (queue.length > 0) {
        const [row, col] = queue.shift();
        regionCells.push([row, col]);

        minRow = Math.min(minRow, row);
        maxRow = Math.max(maxRow, row);
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        for (const [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;

            if (
                isOpen(matrix, newRow, newCol) &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol]);
            }
        }
    }

    return {
        regionCells,
        bounds: { minRow, maxRow, minCol, maxCol },
    };
}

function extractSubmatrix(matrix, { minRow, maxRow, minCol, maxCol }) {
    const submatrix = [];
    for (let r = minRow; r <= maxRow; r++) {
        const rowSlice = matrix[r].slice(minCol, maxCol + 1);
        submatrix.push(rowSlice);
    }
    return submatrix;
}