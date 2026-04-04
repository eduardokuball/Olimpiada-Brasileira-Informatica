function isValid(matrix, r, c, visited) {
    return (
        r >= 0 && r < matrix.length &&
        c >= 0 && c < matrix[0].length &&
        matrix[r][c] !== '#' &&
        !visited[r][c]
    );
}

function bfs(matrix, startR, startC, visited) {
    const queue = [[startR, startC]];
    visited[startR][startC] = true;

    let sheeps = 0;
    let wolfs = 0;

    const directions = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
    ];

    while (queue.length) {
        const [r, c] = queue.shift();

        if (matrix[r][c] === 'k') sheeps++;
        if (matrix[r][c] === 'v') wolfs++;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (isValid(matrix, nr, nc, visited)) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }

    return { sheeps, wolfs };
}

export default function solveFarm(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    let totalSheeps = 0;
    let totalWolfs = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (matrix[r][c] !== '#' && !visited[r][c]) {
                const { sheeps, wolfs } = bfs(matrix, r, c, visited);

                if (sheeps > wolfs) {
                    totalSheeps += sheeps;
                } else {
                    totalWolfs += wolfs;
                }
            }
        }
    }

    return [totalSheeps, totalWolfs];
}