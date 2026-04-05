import { input, output } from '../../../../utils/io.js';
import calculateNetworkDifference from '../C.js';

const [islands, cables] = input().split(' ').map(Number);

const edges = [];

for (let i = 0; i < cables; i++) {
    const [a, b, w] = input().split(' ').map(Number);
    edges.push([a, b, w]);
}

const server = Number(input());

const result = calculateNetworkDifference(islands, edges, server);

output(result);