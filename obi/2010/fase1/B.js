function buildField(linesData) {
    return linesData.map(row => row.split(''));
}

function getShips(field, lines, columns) {
    const visited = Array.from({ length: lines }, () => Array(columns).fill(false));
    const ships = [];

    const directions = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
    ];

    function dfs(x, y, ship) {
        visited[x][y] = true;
        ship.push([x, y]);

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && nx < lines &&
                ny >= 0 && ny < columns &&
                !visited[nx][ny] &&
                field[nx][ny] === '#'
            ) {
                dfs(nx, ny, ship);
            }
        }
    }

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            if (field[i][j] === '#' && !visited[i][j]) {
                const ship = [];
                dfs(i, j, ship);
                ships.push(ship);
            }
        }
    }

    return ships;
}

export default function countDestroyedShips(lines, columns, linesData, commandsList) {

    const field = buildField(linesData);

    const hits = Array.from({ length: lines }, () => Array(columns).fill(false));

    for (const [x, y] of commandsList) {
        hits[x - 1][y - 1] = true;
    }

    const ships = getShips(field, lines, columns);

    let destroyed = 0;

    for (const ship of ships) {
        const allHit = ship.every(([x, y]) => hits[x][y]);

        if (allHit) destroyed++;
    }

    return destroyed;
}