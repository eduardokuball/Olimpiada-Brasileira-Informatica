function generateMatrix(x, y) {
    let counter = 1;

    const matrix = [];

    for (let i = 0; i < x; i++) {
        matrix.push([]);
        // Dá push depois incrementa;
        for (let j = 0; j < y; j++) matrix[i].push(counter++);
    }

    return matrix;
}

function swapRow(matrix, rowA, rowB) {
    const helper = matrix[rowA];

    matrix[rowA] = matrix[rowB];
    matrix[rowB] = helper;
}

function swapColumn(matrix, columnA, columnB) {
    matrix.forEach(row => {
        const helper = row[columnA];
        
        row[columnA] = row[columnB];
        row[columnB] = helper;
    });
}

const [sideX, sideY, commandsQuantity] = prompt()
    .split(' ', 3)
    .map(Number);

const matrix = generateMatrix(sideX, sideY);

// Pra cada comando:
for (let i = 0; i < commandsQuantity; i++) {
    const lineInput = prompt().split(' ', 3);

    const [command, ...rest] = lineInput;
    const [a, b] = rest.map(Number);

    const commandsMap = {
        'L': (a, b) => swapRow(matrix, a-1, b-1),
        'C': (a, b) => swapColumn(matrix, a-1, b-1)
    };

    commandsMap[command](a, b);
}

// Saída formatada:
matrix.forEach(row => console.log(row.join(' ')));
