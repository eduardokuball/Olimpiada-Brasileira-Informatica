import { input, output } from '../../../../utils/io.js';
import countDifferentFamilies from '../C.js';

const [n, m] = input().split(' ').map(Number);

const relations = [];

for (let i = 0; i < m; i++) {
    const [a, b] = input().split(' ').map(Number);
    relations.push([a, b]);
}

const result = countDifferentFamilies(n, relations);

output(result);