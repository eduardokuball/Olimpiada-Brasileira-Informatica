import { input, output } from '../../../../utils/io.js';
import simulateWaterFlow from '../D.js';

const [rows, cols] = input().split(' ').map(Number);

const grid = [];

for (let i = 0; i < rows; i++) {
    grid.push(input());
}

const result = simulateWaterFlow(grid);

result.forEach(r => output(r));