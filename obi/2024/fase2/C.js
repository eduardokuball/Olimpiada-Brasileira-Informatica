function generateMatrix(rows, cols) {
    let counter = 1;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(counter++);
        }
    }

    return matrix;
}

function swapRows(matrix, rowA, rowB) {
    const temp = matrix[rowA];
    matrix[rowA] = matrix[rowB];
    matrix[rowB] = temp;
}

function swapColumns(matrix, colA, colB) {
    matrix.forEach(row => {
        const temp = row[colA];
        row[colA] = row[colB];
        row[colB] = temp;
    });
}

export default function processMatrixOperations(rows, cols, commands) {
    const matrix = generateMatrix(rows, cols);

    commands.forEach(([command, a, b]) => {
        if (command === 'L') {
            swapRows(matrix, a - 1, b - 1);
        } else if (command === 'C') {
            swapColumns(matrix, a - 1, b - 1);
        }
    });

    return matrix;
}