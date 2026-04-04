// N -> Linhas | M -> Colunas
// P(i,j) -> Poder do monstro [i][j]

// Regras:
// * Todas as células da matriz possuem um monstro
// * O herói se move verticalmente (cima, baixo) e horizontalmente (esquerda, direita)
// * O herói pode visitar a mesma célula quantas vezes quiser
// * Quando um herói entra numa célula com um monstro vivo, ocorre uma batalha
    // * O herói ganha se o seu poder for >= ao poder do monstro.
    // * Caso o contrário: game over -> Herói morre
    // * Ao vencer o herói soma os pontos de poder do monstro derrotado aos seus próprios pontos de poder

class Monster {
    constructor(board, i, j) {
        this.x = i;
        this.y = j;
        this.power = board[i][j];
    }
}

const encode = (i,j) => [i,j].join(':');
const decode = code => code.split(':').map(Number);
const heroWins = (powerHero, powerEnemy) => powerHero >= powerEnemy;

function getNeighbors(board, i, j) {
    const N_ROWS = board.length;
    const N_COLS = board[0].length;

    const adjacents = [
        [i, j+1], // Right
        [i+1, j], // Down
        [i, j-1], // Left
        [i-1, j]  // Up
    ];

    const isValidX = x => x >= 0 && x < N_ROWS;
    const isValidY = y => y >= 0 && y < N_COLS;
    return adjacents.filter(([x,y]) => isValidX(x) && isValidY(y));
}

// Find visible enemies
function findEnemies(board, i, j) {
    const enemies = [];

    const visited = new Set();
    const stack = [];
    stack.push(encode(i,j));

    while (stack.length > 0) {
        const node = stack.pop();
        if (visited.has(node)) continue;
        visited.add(node);

        const [x, y] = decode(node);

        if ((board[x][y] !== 0) && ((x !== i) || (y !== j))) {
            enemies.push([x,y]);
            continue;
        }

        const neighbors = getNeighbors(board, x, y).map(n => encode(...n));
        stack.push(...neighbors);
    }

    return enemies;
}

// Find the weaker enemy
function findWeaker(board, enemies = []) {
    const monsters = enemies.map(([x, y]) => new Monster(board, x, y));

    let [weaker] = monsters;
    for (const m of monsters) if (m.power < weaker.power) weaker = m;
    return weaker;
}

// Calculates the power of hero (ij)
function calcHeroPower(board, i, j) {
    const simulation = [...board.map(r => [...r])];
    
    let heroPower = simulation[i][j];

    while (true) {
        const enemies = findEnemies(simulation, i, j);
        if (enemies.length <= 0) break;

        const weaker = findWeaker(simulation, enemies);
        if (!heroWins(heroPower, weaker.power)) break;

        simulation[weaker.x][weaker.y] = 0;
        heroPower += weaker.power;
    }

    return heroPower;
}

// Main Function
export default function powerGame(board) {
    const N_ROWS = board.length;
    const N_COLS = board[0].length;

    const powerMatrix = [];
    
    for (let i = 0; i < N_ROWS; i++) {
        const row = [];
        for (let j = 0; j < N_COLS; j++) {
            const power = calcHeroPower(board, i, j);
            row.push(power);
        }
        powerMatrix.push(row);
    }

    return powerMatrix;
}
