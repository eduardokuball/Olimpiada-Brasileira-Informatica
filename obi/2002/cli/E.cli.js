import { input, output } from '../../../utils/io.js';
import reachableCities from '../E.js';

const [cities, roads, currentCity, maximum] = input().split(' ').map(Number);

const edges = [];

for (let i = 0; i < roads; i++) {
    const [from, to] = input().split(' ').map(Number);
    edges.push([from, to]);
}

const result = reachableCities(cities, currentCity, maximum, edges);

output(result);