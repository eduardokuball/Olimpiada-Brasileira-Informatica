import { input, output } from '../../../../utils/io.js';
import findMinimumCutDifference from '../C.js';

const n = Number(input());
const edges = [];

for (let i = 1; i < n; i++) {
    const [a, b] = input().split(' ').map(Number);
    edges.push([a, b]);
}

const result = findMinimumCutDifference(n, edges);

output(result);