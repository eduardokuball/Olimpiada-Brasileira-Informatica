import { input, output } from '../../../../utils/io.js';
import findCheapestRoute from '../D.js';

const [cities, links] = input().split(' ').map(Number);
const edges = [];

for (let i = 0; i < links; i++) {
    const [a, b, distance] = input().split(' ').map(Number);
    edges.push([a, b, distance]);
}

const result = findCheapestRoute(cities, edges);

output(result);