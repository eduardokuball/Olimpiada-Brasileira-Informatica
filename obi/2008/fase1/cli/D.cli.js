import { input, output } from '../../../../utils/io.js';
import solve from '../D.js';

const [s, c] = input().split(' ').map(Number);

const edges = [];

for (let i = 0; i < c; i++) {
    edges.push(
        input().split(' ').map(Number)
    );
}

const result = solve(s, edges);

output(result);