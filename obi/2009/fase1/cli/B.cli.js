import { input, output } from '../../../../utils/io.js';
import hasDuplicateLightningCoordinates from '../B.js';

const registers = Number(input());

const coordinates = [];

for (let i = 0; i < registers; i++) {
    const [x, y] = input()
        .split(' ')
        .map(Number);

    coordinates.push([x, y]);
}

const result = hasDuplicateLightningCoordinates(registers, coordinates);

output(result);