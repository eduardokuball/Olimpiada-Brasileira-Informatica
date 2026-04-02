import { input, output } from '../../../../utils/io.js';
import processQueries from '../E.js';

const [n, q] = input().split(' ').map(Number);

const queries = [];

for (let i = 0; i < q; i++) {
    queries.push(input().split(' ').map(Number));
}

const result = processQueries(n, queries);

result.forEach(r => output(r));