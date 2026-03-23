function getNeighbors(game=[[]], x=0, y=0) {
    const neighbors = [];

    const variation = [-1, 0, 1];

    // Pega todos os vizinhos e checa quais estão dentro da matriz antes de dar push
    variation.forEach(xN => {
        variation.forEach(yN => {
            if (xN === 0 && yN === 0) return;

            const neighbor = game?.[x+xN]?.[y+yN];
            if ([0, 1].includes(neighbor)) neighbors.push(neighbor);
        });
    });

    return neighbors;
}

function getNextState(game=[[]]) {
    // Copia a matriz
    const nextStateGame = [...game.map(e => [...e])];

    game.forEach((row, x) => {
        row.forEach((cell, y) => {
            let newStateCell = cell;

            const livingNeighbors = getNeighbors(game, x, y)
                .filter(n => n === 1)
                .length;

            if (cell === 0 && livingNeighbors === 3) {
                newStateCell = 1;
            }
            
            if (cell === 1 && (livingNeighbors < 2 || livingNeighbors > 3)) {
                newStateCell = 0;
            }

            nextStateGame[x][y] = newStateCell;
        });
    });

    return nextStateGame;
}

const [side, steps] = prompt().split(' ', 2).map(e => parseInt(e));

const game = [];

for (let i = 0; i < side; i++) {
    const row = prompt().split('', side).map(e => parseInt(e));
    game.push(row);
}

let lastGame = game;

for (let i = 0; i < steps; i++)
    lastGame = getNextState(lastGame);

// Imprime a matriz no formato correto:
lastGame.forEach(row => console.log(row.join('')));
