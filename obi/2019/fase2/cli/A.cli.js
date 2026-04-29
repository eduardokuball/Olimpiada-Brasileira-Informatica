import { input, output } from '../../../../utils/io.js';
import detetive from '../A.js';

const [events, I, V] = input().split(' ', 3).map(Number);
const implications = [];

for (let i = 0; i < I; i++) {
    const edge = input().split(' ', 2).map(Number);
    implications.push(edge);
}

const trueEvents = input().split(' ', V).map(Number);
const result = detetive(events, implications, trueEvents).join(' ');
output(result);
