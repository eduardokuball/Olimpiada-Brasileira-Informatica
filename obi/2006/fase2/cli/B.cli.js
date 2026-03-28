import { input, output } from '../../../../utils/io.js';
import solveFarm from '../B.js';

const [lines, columns] = input()
    .split(' ')
    .map(Number);

const matrix = [];

for (let i = 0; i < lines; i++) {
    matrix.push(input().split(''));
}

const [sheeps, wolfs] = solveFarm(matrix);

output(`${sheeps} ${wolfs}`);