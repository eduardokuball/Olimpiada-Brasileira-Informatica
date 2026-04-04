import { input, output } from '../../../../utils/io.js';
import jumps from '../C.js';

const [lines, columns] = input()
    .split(' ')
    .map(Number);

const matrix = [];

for (let i = 0; i < lines; i++) {
    matrix.push(
        input().split(' ').map(Number)
    );
}

const result = jumps(matrix);

output(result);