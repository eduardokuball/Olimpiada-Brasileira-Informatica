import { input, output } from '../../../../utils/io.js';
import findTreasure from '../B.js';

const [dimension, hint] = input()
    .split(' ')
    .map(Number);

const hintsInput = [];

for (let i = 0; i < hint; i++) {
    const [x, y, d] = input()
        .split(' ')
        .map(Number);

    hintsInput.push([x, y, d]);
}

const result = findTreasure(dimension, hint, hintsInput);

output(result[0] + ' ' + result[1]);