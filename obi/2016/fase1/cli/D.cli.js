import { input, output } from '../../../../utils/io.js';
import getLowestColumnSum from '../D.js';

const [lines, columns] = input().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < lines; i++) {
    const row = input().split(' ').map(Number);
    matrix.push(row);
}

const result = getLowestColumnSum(matrix);

output(result);