import { input, output } from '../../../../utils/io.js';
import getMagicSquareValue from '../A.js';

const n = Number(input());

const square = [];

for (let i = 0; i < n; i++) {
    const row = input().split(' ').map(Number);
    square.push(row);
}

const result = getMagicSquareValue(square);

output(result);