export default function simulateWaterFlow(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const g = grid.map(row => row.split(''));
    const queue = [];

    function wet(a, b) {
        g[a][b] = 'o';
        queue.push([a, b]);
    }

    function bfs(i, j) {
        queue.push([i, j]);

        while (queue.length > 0) {
            const [a, b] = queue.shift();

            if (a === rows - 1) continue;

            if (g[a + 1][b] === '.') {
                wet(a + 1, b);
            } else if (g[a + 1][b] === '#') {
                if (b - 1 >= 0 && g[a][b - 1] === '.') {
                    wet(a, b - 1);
                }
                if (b + 1 < cols && g[a][b + 1] === '.') {
                    wet(a, b + 1);
                }
            }
        }
    }

    const startCol = g[0].indexOf('o');
    bfs(0, startCol);

    return g.map(row => row.join(''));
}