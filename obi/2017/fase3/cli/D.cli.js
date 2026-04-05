import { input, output } from '../../../../utils/io.js';
import processFenwickQueries from '../A.js';

const [n, q] = input().split(' ').map(Number);
const residents = input().split(' ').map(Number);

const operations = [];

for (let i = 0; i < q; i++) {
    const values = input().split(' ').map(Number);
    operations.push(values);
}

const result = processFenwickQueries(n, residents, operations);

result.forEach(r => output(r));