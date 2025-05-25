const [ rows, columns ] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const image = [];

for (let i = 0; i < rows; i++) {
    const row = prompt()
        .split('', columns)
        .map(e => parseInt(e));

    image.push(row);    
};


function getNeighbors(matrix, x, y) {
    const directions = [
        [-1,  0], // ↑
        [-1,  1], // ↗
        [ 0,  1], // →
        [ 1,  1]  // ↘
        [ 1,  0], // ↓
        [ 1, -1], // ↙
        [ 0, -1], // ←
        [-1, -1], // ↖
    ];

    return directions
        .map(([dx, dy]) => [x + dx, y + dy]) // Faz a soma para pegar os vizinhos
        .filter(([nx, ny]) => nx >= 0 && ny >= 0) // Filtra os que tem range <
        .filter(([nx, ny]) => (nx < matrix.length) && (ny < matrix[0].length)); // Filtra os que tem range >
};

const absoluteArray = array => JSON.stringify(array);

// Ao invés de passar um vertex a gente passa uma coordenada ij
function getConstructionBlocks(matrix, [i, j], visited=[]) {
    const vertex = absoluteArray([i, j]);

    if (visited.includes(vertex)) return visited;
    visited.push(vertex);

    getNeighbors(matrix, i, j)
    .filter(([x, y]) => matrix[x][y] !== 0)
    .forEach(([x, y]) => {
        getConstructionBlocks(matrix, [x, y], visited);
    });

    return visited;
};

let buildings = 0;
let occupiedBlocks = [];

image.forEach((row, i) => {
    for (let [j, column] of row.entries()) {
        const block = absoluteArray([i, j]);
    
        if (column === 0) continue;
        if (occupiedBlocks.includes(block)) continue;
    
        const blocks = getConstructionBlocks(image, [i, j]);
        occupiedBlocks = [...occupiedBlocks, ...blocks];
        buildings++;
    }
});

console.log(buildings);
