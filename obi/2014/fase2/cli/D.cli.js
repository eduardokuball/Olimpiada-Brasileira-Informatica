import { input, output } from '../../../../utils/io.js';
import countValidPairs from '../D.js';

const n = Number(input());

const edges = [];

for (let i = 0; i < n - 1; i++) {
    edges.push(input().split(' ').map(Number));
}

const result = countValidPairs(n, edges);

output(result);