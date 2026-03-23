import { input, output } from '../../../utils/io.js';
import minimumSpanningTree from '../A.js';

const lines = [];


while (true) {
    const line = input();
    if (!line) break;
    lines.push(line);
}

const result = minimumSpanningTree(lines);

result.forEach(([a, b]) => {
    output(a, b);
});