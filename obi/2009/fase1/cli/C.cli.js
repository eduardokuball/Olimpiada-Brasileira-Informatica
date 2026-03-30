import { input, output } from '../../../../utils/io.js';
import getMinimumRouteCost from '../C.js';

const [pillars, bridges] = input()
    .split(' ')
    .map(Number);

const edges = [];

for (let i = 0; i < bridges; i++) {
    const [a, b, distance] = input()
        .split(' ')
        .map(Number);

    edges.push([a, b, distance]);
}

const result = getMinimumRouteCost(pillars, bridges, edges);

output(result);