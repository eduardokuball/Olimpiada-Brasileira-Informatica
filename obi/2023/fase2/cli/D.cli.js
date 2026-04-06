import { input, output } from '../../../../utils/io.js';
import getMaxMinCapacity from '../D.js';

const [islands, ships] = input().split(' ').map(Number);

const edges = [];

for (let i = 0; i < ships; i++) {
    const [a, b, w] = input().split(' ').map(Number);
    edges.push([a, b, w]);
}

const q = Number(input());

const queries = [];

for (let i = 0; i < q; i++) {
    const [start, end] = input().split(' ').map(Number);
    queries.push([start, end]);
}

const result = getMaxMinCapacity(islands, edges, queries);

result.forEach(r => output(r));