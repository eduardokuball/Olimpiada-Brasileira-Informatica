import { input, output } from '../../../../utils/io.js';
import processQueueOperations from '../E.js';

const n = Number(input());
const fila = input().split(' ').map(Number);

const q = Number(input());

const operations = [];

for (let j = 0; j < q; j++) {
    const [t, i, x] = input().split(' ').map(Number);
    operations.push([t, i, x]);
}

const result = processQueueOperations(fila, operations);

result.forEach(r => output(r));