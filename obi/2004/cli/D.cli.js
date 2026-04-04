import { input, output } from '../../../utils/io.js';
import scrollMatrix from '../D.js';

const [lines, columns] = input().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < lines; i++) {
    matrix.push(input().split(' ').map(Number));
}

const operations = [];

while (true) {
    const [x, y] = input().split(' ').map(Number);

    if (x === 0 && y === 0) break;

    operations.push([x, y]);
}

const result = scrollMatrix(lines, columns, matrix, operations);

result.forEach(row => output(row.join(' ')));