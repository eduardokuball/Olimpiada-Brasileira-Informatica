import { input, output } from '../../../../utils/io.js';
import solve from '../D.js';

const [colonies, roads] = input()
    .split(' ')
    .map(Number);

const edges = [];

for (let i = 0; i < roads; i++) {
    const [start, end, cost] = input()
        .split(' ')
        .map(Number);

    edges.push([start, end, cost]);
}

const result = solve(colonies, roads, edges);

output(result);