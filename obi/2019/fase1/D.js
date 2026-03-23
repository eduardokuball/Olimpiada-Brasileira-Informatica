function wet(a, b) {
    grid[a][b] = 'o';
    queue.push([a, b]);
}

function bfs(i, j) {
    queue.push([i, j]);

    while (queue.length > 0) {
        const [a, b] = queue.shift();

        if (a === rows - 1) continue;

        if (grid[a + 1][b] === '.') wet(a + 1, b);
        else if (grid[a + 1][b] === '#') {
            if (grid[a][b - 1] === '.') wet(a, b - 1);
            if (grid[a][b + 1] === '.') wet(a, b + 1);
        }
    }
}

const [rows,colums] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });


const grid = [];

for (let i = 0; i < rows; i++) {
    const row = prompt()
    .split("");
    grid.push(row);
}

const queue = [];

bfs(0, grid[0].indexOf('o'));

for (let i = 0; i < rows; i++) {
    console.log(grid[i].join(""));
}
