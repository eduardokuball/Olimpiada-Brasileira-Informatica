import { input, output } from '../../../../utils/io.js';
import calculateMaxPaths from '../E.js';

const [n, m] = input().split(' ').map(Number);

const edges = [];

for (let i = 0; i < m; i++) {
    const [a, b] = input().split(' ').map(Number);
    edges.push([a, b]);
}

const result = calculateMaxPaths(n, edges);

output(result.join(' '));