const registers = Number(prompt('Digite a quantidade de registros'));
const coordenates = [];
let lightningSamePlace = false;

for (let i = 0; i < registers; i++) {
    const [x, y] = prompt('Digite a coordenada do quadrante')
        .split(' ')
        .map(Number);

    const newCoordinate = { x, y };

    const exists = coordenates.some(existingCoordinate =>
        Object.keys(newCoordinate).every(key => newCoordinate[key] === existingCoordinate[key])
    );

    if (!exists) {
        coordenates.push(newCoordinate);
    } else {
        lightningSamePlace = true;
    }
};

console.log(lightningSamePlace ? 1 : 0);