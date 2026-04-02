import { input, output } from '../../../../utils/io.js';
import getMinimumCost from '../A.js';

const [n, f, r] = input().split(' ').map(Number);

const freeEdges = [];
const regularEdges = [];

for (let i = 0; i < f; i++) {
    const [a, b, k] = input().split(' ').map(Number);
    freeEdges.push([a, b, k]);
}

for (let i = 0; i < r; i++) {
    const [a, b, k] = input().split(' ').map(Number);
    regularEdges.push([a, b, k]);
}

const result = getMinimumCost(n, freeEdges, regularEdges);

output(result);