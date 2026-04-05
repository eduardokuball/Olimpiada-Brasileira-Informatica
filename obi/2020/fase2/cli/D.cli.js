import { input, output } from '../../../../utils/io.js';
import findMinimumNeighborhood from '../D.js';

const roadSize = Number(input());
const cities = Number(input());

const distances = [];

for (let i = 0; i < cities; i++) {
    distances.push(Number(input()));
}

const result = findMinimumNeighborhood(roadSize, distances);

output(result.toFixed(2));