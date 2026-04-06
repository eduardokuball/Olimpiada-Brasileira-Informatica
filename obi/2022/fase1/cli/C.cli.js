import { input, output } from '../../../../utils/io.js';
import findMissingNumberInSquare from '../C.js';

const dimension = Number(input());

const square = [];

for (let i = 0; i < dimension; i++) {
    const row = input().split(' ').map(Number);
    square.push(row);
}

const result = findMissingNumberInSquare(square);

result.forEach(r => output(r));