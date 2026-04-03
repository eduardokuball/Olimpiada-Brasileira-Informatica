import { input, output } from '../../../../utils/io.js';
import getMinimumPathCost from '../C.js';

const n = Number(input());

const grid = [];

for (let i = 0; i < n; i++) {
    grid.push(input().split(' ').map(Number));
}

const result = getMinimumPathCost(grid);

output(result);