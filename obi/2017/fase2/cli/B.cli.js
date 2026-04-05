import { input, output } from '../../../../utils/io.js';
import findFinalPosition from '../B.js';

const [rows, cols] = input().split(' ').map(Number);
const grid = [];

for (let i = 0; i < rows; i++) {
    grid.push(input());
}

const result = findFinalPosition(grid);

output(result.join(' '));