import { input, output } from '../../../../utils/io.js';
import maxCajuSum from '../B.js';

const [matrixX, , submatrixX, submatrixY] = input()
    .split(' ')
    .map(Number);

const matrix = [];

for (let i = 0; i < matrixX; i++) {
    const row = input()
        .split(' ')
        .map(Number);

    matrix.push(row);
}

const result = maxCajuSum(matrix, submatrixX, submatrixY);

output(result);