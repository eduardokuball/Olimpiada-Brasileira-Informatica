import { input, output } from '../../../../utils/io.js';
import getTopologicalOrder from '../C.js';

const [n, m] = input().split(' ').map(Number);

const dependencies = [];

for (let i = 0; i < m; i++) {
    const [a, b] = input().split(' ').map(Number);
    dependencies.push([a, b]);
}

const result = getTopologicalOrder(n, dependencies);

result.forEach(r => output(r));