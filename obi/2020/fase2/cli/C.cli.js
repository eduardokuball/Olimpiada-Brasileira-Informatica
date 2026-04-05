import { input, output } from '../../../../utils/io.js';
import findMinimumRouteTime from '../C.js';

const citiesQuantity = Number(input());
const paths = (citiesQuantity * (citiesQuantity - 1)) / 2;

const edges = [];

for (let i = 0; i < paths; i++) {
    const [a, b, w] = input().split(' ').map(Number);
    edges.push([a, b, w]);
}

const result = findMinimumRouteTime(citiesQuantity, edges);

output(result);