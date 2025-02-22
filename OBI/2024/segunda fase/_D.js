// L C (linhas e colunas)

// Depois ler a matriz em si (separado por espaço)

// Regras:
// - O herói só vence caso sua força seja maior ou igual a força do adversário
// - O herói só anda na vertical e horizontal
// - Ao derrotar um adversário o herói soma seus pontos de força

// Objetvo: Descobrir o número máximo de pontos de força que cada herói em potencial pode ter.

function getNeighbors(matrix=[], x, y) {
    const neighbors = [
        [x-1, y],
        [x+1, y],
        [x, y-1],
        [x, y+1]
    ].filter(([x, y]) => {
        const xAccept = x >= 0 && x < matrix.length;
        const yAccept = y >= 0 && y < matrix[0].length;

        return xAccept && yAccept;
    });

    return neighbors;
}

// Passa o jogo para o próximo estado a partir de um herói
function nextState(matrix=[], hero) {
    const game = [...matrix.map(e => [...e])];

    const { x, y, power } = hero;

    const neighbors = getNeighbors(game, x, y)
        .filter(([x, y]) => game[x][y] <= power);

    if (neighbors.length <= 0) return { status: 'dead', final_power: power };

    const [enemyX, enemyY] = neighbors[0];
    const enemyPower = game[enemyX][enemyY];

    // Zera a posição que o herói saiu
    game[x][y] = 0;

    const nextHeroStats = {
        x: enemyX,
        y: enemyY,
        power: power + enemyPower
    };

    // A posição atual do herói vira a soma dos 2:
    game[enemyX][enemyY] = nextHeroStats.power;

    // Objeto com o próximo estado do herói e do jogo
    return {
        status: 'alive',
        hero: nextHeroStats,
        game,
    }
}

// Passa todos os estados do jogo até que o herói morra ou só sobre ele
function calcMaxHeroXp(hero, game=[]) {
    let lastGame = game;
    let lastHeroStats = hero;

    while (true) {
        // console.warn('input game: ', lastGame);
        const next = nextState(lastGame, hero);
        console.warn('game: ', next?.game);

        console.warn('next state: ', next);

        if (next.status === 'alive') lastGame = next.game;
        lastHeroStats = next.hero;

        if (next.status === 'dead') return next.final_power;
        if (lastGame.filter(e => e > 0).length <= 1) return next.hero.power;
    }
}

const [sideX, sideY] = prompt()
    .split(' ', 2)
    .map(Number);

const matrix = [];

for (let i = 0; i < sideX; i++) {
    const row = prompt()
        .split(' ', sideY)
        .map(Number);

    matrix.push(row);
}

const outputMatrix = [];

matrix.forEach((row, x) => {
    outputMatrix.push([]);

    row.forEach((cell, y) => {
        const hero = {
            power: cell,
            x, y
        };

        const maxXP = calcMaxHeroXp(hero, matrix);
        console.warn(maxXP);
        outputMatrix[x].push(maxXP);
    });
});

console.table(outputMatrix);
