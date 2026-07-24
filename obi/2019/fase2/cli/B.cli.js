import { input, output } from '../../../../utils/io.js';
import superCoolMatrix from '../B.js';

const [N, M] = input().split(' ', 2).map(Number);
const matrix = [];

for (let i = 0; i < N; i++) {
    const row = input().split(' ', M).map(Number);
    matrix.push(row);
}

output(superCoolMatrix(matrix));
