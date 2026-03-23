function generateZeroSquare({ top, right, bottom, left }) {
    const MAX_X = Math.abs(right) + Math.abs(left);
    const MAX_Y = Math.abs(top) + Math.abs(bottom);

    const matrix = [];

    for (let i = 0; i <= MAX_Y; i++) {
        const row = new Array(MAX_X+1).fill(0);
        matrix.push(row);
    }

    return matrix;
}

const pointsQuantity = parseInt(prompt());
const points = [];

for (let i = 1; i <= points; i++) {
    const [x, y] = prompt().split(' ', 2).map(e => parseInt(e));
    points.push({ x, y });
}

// Formato dos pontos:
// const points = [
//     { x: 2, y: -3 },
//     { x: 2, y: 2 },
//     { x: -3, y: 3 },
//     { x: -2, y: -1 }
// ];

const [xPoints, yPoints] = [points.map(e => e.x), points.map(e => e.y)];
const smallest = {
    top: Math.min(...yPoints),
    right: Math.max(...xPoints),
    bottom: Math.max(...yPoints),
    left: Math.min(...xPoints)
};

const matrix = generateZeroSquare(smallest);

const ORIGIN = { x: smallest.left, y: smallest.top };

points.forEach((point, i) => {
    const x = point.x - ORIGIN.x;
    const y = point.y - ORIGIN.y;

    matrix[y][x] = i+1;
});

const player = {
    x: points[0].x,
    y: points[0].y,
    angle: 0,
};

let angleRotateCounter = 0;

const positiveNormalize = (angle) => (angle + 360) % 360;

points.forEach((point, i) => {
    // Pega o próximo ângulo em forma cíclica (se tiver no último volta pro primeiro)
    const nextPoint = points[(i + 1) % points.length];

    // Calcular o ângulo entre o player e o ponto seguinte (em graus)
    const xVariation = nextPoint.x - point.x;
    const yVariation = nextPoint.y - point.y;

    const angleRad = Math.atan2(yVariation, xVariation);
    const angleDeg = 360 - positiveNormalize((angleRad * (180 / Math.PI)));

    const rotation = positiveNormalize(angleDeg - player.angle);

    // Incrementar no angleRotateCounter
    angleRotateCounter += rotation;
    
    // Incrementar no ângulo do player e normalizar
    player.angle = (player.angle + rotation) % 360;

    // Setar a posição do player para o ponto seguinte
    player.x = nextPoint;
    player.y = nextPoint;
});

// Calcular quantos 360 cabem dentro de angleRotateCounter, esse valor é o resultado
const rotates = (angleRotateCounter - (angleRotateCounter % 360)) / 360 
console.log(`rotaçoes: ${rotates}`);
