import { input, output } from '../../../../utils/io.js';
import isStairMatrix from '../E.js';

const [lines, columns] = input().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < lines; i++) {
    matrix.push(input().split(' ').map(Number));
}

const result = isStairMatrix(matrix);

output(result);