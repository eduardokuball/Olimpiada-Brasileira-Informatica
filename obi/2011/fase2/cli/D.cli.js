import { input, output } from '../../../../utils/io.js';
import getMinimumSpanningTreeCost from '../D.js';

const [cities, highways] = input().split(' ').map(Number);

const highwaysList = [];

for (let i = 0; i < highways; i++) {
    const [u, v, c] = input().split(' ').map(Number);
    highwaysList.push([u, v, c]);
}

const result = getMinimumSpanningTreeCost(cities, highwaysList);

output(result);