// Peça branca n pode ter branca adjacente
// Peça branca precisa ter pelo menos uma preta adjacente

const [ matrixX, matrixY ] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const board = [];

for (let i = 0; i < matrixX; i++) {
    board.push([]);

    for (let j = 0; j < matrixY; j++) {
        board[i].push(0);
    }
}

const pieces = parseInt(prompt());

for (let i = 1; i <= pieces; i++) {
    const [ x, y ] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

        board[x-1][y-1] = 1;
}

function getAdjacentSquares(matrix, x, y) {
    return [
        matrix?.[x+1]?.[y],
        matrix?.[x-1]?.[y],
        matrix?.[x]?.[y+1],
        matrix?.[x]?.[y-1],
    ].filter(e => e !== undefined);
}


function getDiagonalSquares(matrix, x, y) {
    return [
        matrix?.[x+1]?.[y+1],
        matrix?.[x-1]?.[y-1],
        matrix?.[x-1]?.[y+1],
        matrix?.[x+1]?.[y-1],
    ].filter(e => e !== undefined);
}

const boardReverse = getReverseMatrix(board);

function getReverseMatrix(matrix) {
    const reverse = matrix.map(row => [...row]);

    reverse.forEach((_, i, arr) => arr[i].reverse());
    reverse.reverse();

    return reverse;
}

function addPiecesIntoBoard(board) {
    board.forEach((row, x, matrix) => {
        row.forEach((square, y) => {
            if (square !== 0) return;
    
            const adjacents = getAdjacentSquares(board, x, y);
            const hasBlackAdjacent = adjacents.some(e => e === 1);
            const hasWhiteAdjacent = adjacents.some(e => e === 2);
    
            
            if (!hasBlackAdjacent) return;
            if (hasWhiteAdjacent) return;
            
            matrix[x][y] = 2;
        });
    });
}


addPiecesIntoBoard(board);
addPiecesIntoBoard(boardReverse);


const boardWhites = board
    .flat()
    .filter(e => e === 2)
    .length;

const boardReverseWhites = boardReverse
    .flat()
    .filter(e => e === 2)
    .length;

console.log(Math.max(boardWhites, boardReverseWhites));
