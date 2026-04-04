import { input, output } from '../../../../utils/io.js';
import minPenalty from '../A.js';

const dimension = Number(input());

const matrix = [];

for (let i = 0; i < dimension; i++) {
    matrix.push(
        input().split(' ').map(Number)
    );
}

const result = minPenalty(matrix);

output(result);