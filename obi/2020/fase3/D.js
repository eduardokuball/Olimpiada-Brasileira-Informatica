export default function maximizeWhitePieces(rows, cols, blackPieces) {

    function createBoard() {
        return Array.from({ length: rows }, () => Array(cols).fill(0));
    }

    function getAdjacentSquares(matrix, x, y) {
        return [
            matrix?.[x + 1]?.[y],
            matrix?.[x - 1]?.[y],
            matrix?.[x]?.[y + 1],
            matrix?.[x]?.[y - 1],
        ].filter(e => e !== undefined);
    }

    function getReverseMatrix(matrix) {
        const reverse = matrix.map(row => [...row]);
        reverse.forEach((_, i, arr) => arr[i].reverse());
        reverse.reverse();
        return reverse;
    }

    function addPiecesIntoBoard(board) {
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                if (board[x][y] !== 0) continue;

                const adjacents = getAdjacentSquares(board, x, y);

                const hasBlackAdjacent = adjacents.some(e => e === 1);
                const hasWhiteAdjacent = adjacents.some(e => e === 2);

                if (!hasBlackAdjacent) continue;
                if (hasWhiteAdjacent) continue;

                board[x][y] = 2;
            }
        }
    }

    function countWhites(board) {
        let count = 0;
        for (const row of board) {
            for (const cell of row) {
                if (cell === 2) count++;
            }
        }
        return count;
    }

    const board = createBoard();

    for (const [x, y] of blackPieces) {
        board[x - 1][y - 1] = 1;
    }

    const boardReverse = getReverseMatrix(board);

    addPiecesIntoBoard(board);
    addPiecesIntoBoard(boardReverse);

    const normal = countWhites(board);
    const reversed = countWhites(boardReverse);

    return Math.max(normal, reversed);
}