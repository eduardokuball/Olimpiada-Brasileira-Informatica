import { input, output } from '../../../../utils/io.js';
import assembleFinalWord from '../B.js';

const quantity = Number(input());

const rawPieces = [];

for (let i = 0; i < quantity; i++) {
    const [start, word, end] = input().split(' ');
    rawPieces.push([Number(start), word, Number(end)]);
}

const result = assembleFinalWord(quantity, rawPieces);

output(result);