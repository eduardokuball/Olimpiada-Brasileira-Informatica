import { input, output } from '../../../../utils/io.js';
import getMaxDistance from '../C.js';

const cities = Number(input());

const edges = [];

for (let i = 0; i < cities - 1; i++) {
    const [a, b] = input()
        .split(' ')
        .map(Number);

    edges.push([a, b]);
}

const result = getMaxDistance(cities, edges);

output(result);