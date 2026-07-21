// SOLUÇÃO DEFINITIVA:

// 1. Montar a matriz com os armários em pé
// 2. Calcular o MAIOR caminho dessa matriz
// Obs.: Não é necessário derrubar os armários por conta das restrições do problema. Isso só seria mais complexo.

// Gera a matriz com os armários
function generateMatrix(rows, cols) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < cols; j++) {
            const isBlock = (i % 2 === 1) && (j % 2 === 1);

            if (isBlock) row.push(1);
            else row.push(0);
        }

        matrix.push(row);
    }

    return matrix;
}

// Retorna os vizinhos de um elemento na matriz que NÃO SÃO PAREDES
function getAdjacents(matrix, i, j) {
    return [
        { i: i - 1, j, data: matrix?.[i - 1]?.[j] },
        { i: i + 1, j, data: matrix?.[i + 1]?.[j] },
        { i, j: j - 1, data: matrix?.[i]?.[j - 1] },
        { i, j: j + 1, data: matrix?.[i]?.[j + 1] }
    ].filter(res => res.data !== undefined && res.data !== 1);
}

class Frame {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.index = 0;
        return this;
    }
}

const point = (i,j) => `${i},${j}`;

// Faz o DFS e retorna o maior caminho
function largestPath(matrix, start, end) {
    const [startI, startJ] = start;
    const [endI, endJ] = end;

    const visited = new Set();
    const stack = [];
    visited.add(point(startI,startJ));
    stack.push(new Frame(startI, startJ));
    
    let maxPath = -1;

    while (stack.length > 0) {
        const top = stack[stack.length - 1];
        const neighbors = getAdjacents(matrix, top.i, top.j);

        // console.warn('top:', top);
        // console.warn('neighbors:', neighbors);

        if (top.index >= neighbors.length) {
            stack.pop();
            visited.delete(point(top.i, top.j));
            continue;
        }

        const { i: nx, j: ny } = neighbors[top.index++]; // Increment top.index
        const key = point(nx, ny);
        
        if (visited.has(key)) continue;

        if (nx === endI && ny === endJ) {
            maxPath = Math.max(maxPath, stack.length);
            continue;
        }

        visited.add(key);
        stack.push(new Frame(nx, ny));
    }

    return maxPath + 1 || -1;
}

// Main Function
export default function runAway(rows, cols, start=[], end=[]) {
    const matrix = generateMatrix(rows, cols);
    return largestPath(matrix, start.map(e => e-1), end.map(e => e-1));
}
