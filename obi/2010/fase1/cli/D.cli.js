import { input, output } from '../../../../utils/io.js';
import getBestCity from '../D.js';

const [cities, roads] = input()
    .split(' ')
    .map(Number);

const edges = [];

for (let i = 0; i < roads; i++) {
    const [vertexA, vertexB, width] = input()
        .split(' ')
        .map(Number);

    edges.push([vertexA, vertexB, width]);
}

const result = getBestCity(cities, roads, edges);

output(result);