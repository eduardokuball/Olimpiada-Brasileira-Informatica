let [x1, y1, x2, y2] = prompt('Digite as coordenadas do terreno (X1 Y1 X2 Y2):')
.split(' ')
.map(Number);

const quantity = Number(prompt('Digite a quantidade de meteoros'));
let meteorsOnTheGround = 0;

if (x1 > x2) [x1, x2] = [x2, x1];
if (y1 < y2) [y1, y2] = [y2, y1];

for (let i = 0; i < quantity; i++) {
    const [x, y] = prompt(`Digite as coordenadas do meteorito ${i + 1} (x y):`)
    .split(' ')
    .map(Number);

    if (x >= x1 && x <= x2 && y >= y2 && y <= y1) {
        meteorsOnTheGround++;
    }
}

console.log(meteorsOnTheGround);